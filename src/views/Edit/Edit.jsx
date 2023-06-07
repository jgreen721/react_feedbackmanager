import React, {useRef} from 'react'
import { BackBtn,FormDiv,Button } from '../../components/Generics'
import {plusIcon} from "../../const"
import {Link, useNavigate} from "react-router-dom"
import "./Edit.css"
import { useAppContext } from '../../context/AppContext'


const Edit = () => {
  const {handleDelete,currItemInfo,updateFeedbackItem} = useAppContext();
  const navigate = useNavigate();
  const formRef = useRef();

  console.log("currItemInfo",currItemInfo)
  const categories=[
    {id:1,name:"Features",isSelected:false},
    {id:2,name:"UI",isSelected:false},
    {id:3,name:"UX",isSelected:false},
    {id:4,name:"Enhancement",isSelected:false},
    {id:5,name:"Bug",isSelected:false},
  ]
  const statuses=[
    {id:1,name:"Suggestion",isSelected:false},
    {id:2,name:"Planned",isSelected:false},
    {id:3,name:"In-Progress",isSelected:false},
    {id:4,name:"Live",isSelected:false},
  ]

  const handleUpdate=(e)=>{
    e.preventDefault();
    let newFormData = new FormData(formRef.current);
    console.log(newFormData.get("title"));
    console.log(newFormData.get("category"));
    console.log(newFormData.get("detail"));

    let newFeedbackItem={
      title:newFormData.get("title") || currItemInfo.title,
      category:newFormData.get("category") || currItemInfo.categories,
      description:newFormData.get("detail") || currItemInfo.description,
      status:newFormData.get("status") || currItemInfo.status
  
    }
    let updatedItem ={id:currItemInfo.id,...newFeedbackItem,comments:currItemInfo.comments,upvotes:currItemInfo.upvotes}
    console.log("UPDATED",updatedItem)

    updateFeedbackItem(updatedItem)
  }



  return (
    <div className="modal-container">
      <BackBtn/>
      <div className="modal">
        <div className="modal-icon-div">
          <img className="modal-icon" src={plusIcon} alt="" />
        </div>
        <h1 className="modal-header bold">Editing...</h1>
<form ref={formRef} className="modal-form">
  <FormDiv displayLabel="Feedback Title" label="title" placeholder={currItemInfo.title} description="Add a short, descriptive headline" isSelect={false} isTextArea={false} options={[]}/>
  <FormDiv displayLabel="Category" label="category" placeholder={currItemInfo.category} description="Choose a category for your feedback" isSelect={true} isTextArea={false} options={categories}/>
  <FormDiv displayLabel="Update Status" label="status" placeholder={currItemInfo.status} description="Change feedback status" isSelect={true} isTextArea={false} options={statuses}/>
  <FormDiv displayLabel="Feedback Detail" label="detail" placeholder={currItemInfo.description} description="Include any specific comments on what should be improved, added,etc." isSelect={false} isTextArea={true} options={[]}/>

  <div className="form-btns">
  <Button color="violet" handleAction={(e)=>handleUpdate(e)}>Update Feedback</Button>

    <Button color="red" handleAction={handleDelete}>Delete</Button>
    {/* <Link to='/'> */}
    <Button color="dark" handleAction={()=>navigate("/")}>Cancel</Button>
    {/* </Link> */}
    {/* <Button color="violet" handleAction={(e)=>handleUpdate(e)}>Update Feedback</Button> */}

  </div>
</form>
      </div>
    </div>
  )
}

export default Edit