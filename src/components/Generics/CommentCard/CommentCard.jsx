import React, {useState} from 'react'
import {ReplyBtn,AddReply,ReplyCard} from "../"
import { useAppContext } from '../../../context/AppContext'
import "./CommentCard.css"

const CommentCard = ({id,comment,isReply}) => {
  const [showReply,setShowReply] = useState(false)
  const {replies} = useAppContext();
// console.log("ID",id,comment);



  return (
    <div className={isReply ? "comment-card pl-4 b-left" : "comment-card b-bottom"}>
      <div className={!isReply && !comment?.replies.length ? "desktop-comment-section flex gap-2" : "desktop-comment-section flex gap-2"}>
        <div className="profile-img-div">
          <img src={comment.user.image} alt="" />
        </div>
        <div className="desktop-comment-content-column flex-1">
          <div className="flex justify-between">
            <div>
            <p className="body-text-md bold">{comment.user.name}</p>
            <p className="body-text-sm thin">@{comment.user.username}</p>
            </div>
           <ReplyBtn handleAction={()=>setShowReply(!showReply)}/>
          </div>
          <h4 className="regular my-2">{comment.replyingTo && <span className="text-purple bold mr-2">@{comment.replyingTo}</span>}{comment.content}</h4>
        </div>
      </div>
      {/* {!isReply && replies.length ? 
      replies.filter(r=>r.commentId == comment.id).map(reply=>(
        <CommentCard id={comment.id} isReply={true} key={reply.content} comment={reply}/>
      )) : 
      null
} */}
{!isReply && replies.length ? 
      replies.filter(r=>r.commentId == comment.id).map(reply=>(
        <ReplyCard id={comment.id} isReply={true} key={reply.content} comment={reply}/>
      )) : 
      null
}
<AddReply isReply={isReply} id={id} replyingTo={comment.user.username} setShowReply={setShowReply} showReply={showReply}/>
    </div>
  )
}

export default CommentCard