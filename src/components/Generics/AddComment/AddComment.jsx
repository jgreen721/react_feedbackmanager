import React, {useState} from 'react'
import {Button} from ".."
import { useAppContext } from '../../../context/AppContext'
import "./AddComment.css"

const AddComment = ({commentId}) => {
  const [comment,setComment] = useState("")
  const {addComment} = useAppContext();


  const handleAddComment=()=>{
       addComment(comment,commentId);
       setComment("")
  }
  return (
    <div className="add-comment-container p-2 bg-white ">
        <h2>Add Comment</h2>
        <textarea className="addcomment-textarea" value={comment} onChange={(e)=>setComment(e.target.value)} name="comment" id="" cols="30" rows="5" placeholder="Type your comment here..."></textarea>
        <div className="flex justify-between align-center p-2">
            <h4>{250 - comment.length} Characters left</h4>
            <Button color="violet" handleAction={handleAddComment}>Post Comment</Button>
        </div>
    </div>
  )
}

export default AddComment