import {useEffect, useState, useContext,createContext} from "react"
import { useNavigate } from "react-router-dom";


const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext);




export const AppProvider = ({children})=>{
    const [data,setData] = useState([]);
    const [currUser,setCurrUser] = useState(null);
    const [curr,setCurr] = useState("All")
    const [currFilter,setCurrFilter] = useState("Most Upvotes")
    const [currItemInfo,setCurrItemInfo] = useState({})
    const [suggestions,setSuggestions] = useState([])
    const [planned,setPlanned] = useState([])
    const [inProgress,setInProgress] = useState([])
    const [live,setLive] = useState([])
    const [comments,setComments] = useState([]);
    const [replies,setReplies] = useState([]);
    const stages = [{id:1,stage:"Planned"},{id:2,stage:"In-Progress"},{id:3,stage:"Live"}]
    const categories = [{id:1,category:"All"},{id:2,category:"UI"},{id:3,category:"UX"},{id:4,category:"Enhancement"},{id:5,category:"Bug"},{id:6,category:"Feature"}]
    const navigate = useNavigate();
   



    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(res=>{
            res.productRequests = res.productRequests.map(r=>r.comments ? r : {...r,comments:[]})
            res.productRequests = res.productRequests.map(r=>({...r,comments:r.comments.map(c=>c.replies ? c : {...c,replies:[]})}))
            setData(res.productRequests);
       
            setReplies(parseReplies(res.productRequests));
            setComments(parseComments(res.productRequests))
console.log("Data",res.productRequests)

            let currItemId = parseInt(localStorage.getItem("current-item-id")) || 0
            setCurrItemInfo(res.productRequests[currItemId-1])
            setCurrUser(res.currentUser);
             setSuggestions(res.productRequests.filter(d=>d.status == "suggestion"))
             setPlanned(res.productRequests.filter(d=>d.status == "planned"))
             setInProgress(res.productRequests.filter(d=>d.status == "in-progress"))
             setLive(res.productRequests.filter(d=>d.status == "live"))
            //  setSuggestions([])

        })
    },[])





    const parseComments=(data)=>{
        let tempComments = [];
        let counter = 0;
        data.forEach(item=>{
            item.comments.forEach(comment=>{
                tempComments.push({commentId:item.id,...comment})
                counter++;
            })
        })
        return tempComments
    }

    const parseReplies=(data)=>{
        let tempReplies = [];
       
        let counter = 0;
        data.forEach(item=>{
            item.comments.forEach(comment=>{
              comment.replies.forEach(reply=>{
                  tempReplies.push({commentId:comment.id,id:counter,...reply})
                  counter++;
              })
            })
        })
        console.log(tempReplies)
        return tempReplies
    }



    const handleChangeCategory=(category)=>{
        setCurr(category);
        category = category.toLowerCase();
        console.log("Category",category)
        if(category == "all")setSuggestions((suggestions)=> data.filter(d=>d.status == "suggestion"))

        else setSuggestions((suggestions)=>data.filter(suggestion=>suggestion.category == category && suggestion.status == "suggestion"))

    }


    const toggleModal=(modal)=>{
        console.log("Toggle the view of the " + modal + ".")
    }

    const handleChangeFilter=(filter)=>{
        setCurrFilter(filter)
        console.log(suggestions)
        if(filter == "Most Upvotes"){
        setSuggestions((suggestions)=>suggestions.sort((a,b)=>b.upvotes - a.upvotes))
        }
        if(filter == "Least Upvotes"){
        setSuggestions((suggestions)=>suggestions.sort((a,b)=>a.upvotes - b.upvotes))
        }
        if(filter == "Most Comments"){
            setSuggestions((suggestions)=>suggestions.sort((a,b)=>b.comments.length - a.comments.length))
            }
            if(filter == "Least Comments"){
            setSuggestions((suggestions)=>suggestions.sort((a,b)=>a.comments.length - b.comments.length))
            }

    }

    const getCurrItem=(id)=>{
            console.log("ID",id);
            setCurrItemInfo(()=>data.filter(d=>d.id == id)[0]);
            localStorage.setItem("current-item-id",id);
            console.log(currItemInfo)

    }


    const addReply=(id,reply,replyingTo,isReply)=>{
        let newReply={
            id:comments.length,
            // parentId,
            commentId:id,
            content:reply,
            user:currUser,
            replyingTo,
        
            replies:[]
        }

        console.log(newReply)
        // if(isReply){
        setReplies((replies)=>[...replies,newReply])
        // }
        // else{
        //     console.log("ID",id,comments)
        //     setComments((comments)=>comments.map(comment=>comment.id == id ? {...comment,replies:[...comment.replies,newReply]} : comment))
        //     console.log(comments)
        // }
    
}

const addComment=(comment,commentId)=>{

    let newComment={
        id:comments.length + 1,
        content:comment,
        user:currUser,
        replies:[],
        commentId,
    }
    console.log
    setComments((comments)=>[...comments,newComment])
    console.log(comments)
}

const handleDelete=()=>{
    console.log("handleDelete fired!!")
    setSuggestions((suggestions)=>suggestions.filter(s=>s.description != currItemInfo.description));
    setCurrItemInfo({});
    navigate("/")

}


const addFeedbackItem=(item)=>{
    console.log("Item",item);
    item.user = currUser;
    item.id = data.length+1;
    setSuggestions((suggestions)=>[...suggestions,item]);
    setData((data)=>[...data,item]);
    navigate('/')
}


const updateFeedbackItem=(newItem)=>{
    setCurrItemInfo(newItem);
    setSuggestions((suggestions)=>suggestions.map(s=>s.id == newItem.id ? newItem : s))
    setData((suggestions)=>suggestions.map(s=>s.id == newItem.id ? newItem : s))
    navigate('/')
}


    const values={
        categories,
        curr,
        currFilter,
        currItemInfo,
        suggestions,
        planned,
        inProgress,
        live,
        stages,
        comments,
        replies,

        handleChangeCategory,
        handleChangeFilter,
        handleDelete,
        toggleModal,
        getCurrItem,
        addReply,
        addComment,
        addFeedbackItem,
        updateFeedbackItem
    }

    return (<AppContext.Provider value={values}>
{children}
    </AppContext.Provider>)
}