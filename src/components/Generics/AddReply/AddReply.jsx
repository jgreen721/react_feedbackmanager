import React, {useState} from 'react'
import {Button} from "../"
import { useAppContext } from '../../../context/AppContext';
import "./AddReply.css";

const AddReply = ({id,parentId,isReply,showReply,setShowReply,replyingTo}) => {
    const {addReply} = useAppContext();
    const [reply,setReply] = useState("")
    

    const handleAddReply=()=>{
        console.log("the new reply is ",reply,id);
        addReply(id,reply,replyingTo,isReply)
        setReply("")
        setShowReply(false)
    }

  return (
    <div className={showReply ? "my-2 reply-container" : "my-2 reply-container hide-reply"}>
        <textarea className="reply-input" name="reply" id="reply" value={reply} onChange={(e)=>setReply(e.target.value)} cols="30" rows="5"></textarea>
        <Button color="violet" handleAction={handleAddReply}>Post Reply</Button>
    </div>
  )
}

export default AddReply