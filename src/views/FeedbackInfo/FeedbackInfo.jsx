import React from 'react'
import {Link} from "react-router-dom"
import {BackBtn,Button,CommentCard,AddComment} from "../../components/Generics"
import {SuggestionCard} from "../../components/Suggestions/components"
import { useAppContext } from '../../context/AppContext'
import "./FeedbackInfo.css"

const FeedbackInfo = () => {
    const {currItemInfo,comments} = useAppContext();
    // console.log(comments)
    console.log(currItemInfo)
  return (
    <div className="feedbackinfo-parent">
      <div className="top-feedbackinfo-row my-2 flex justify-between align-center">
        <BackBtn isDark={true}/>
        <Link to="/edit">
        <Button color="dark" handleAction={()=>{}}>Edit Feedback</Button>
        </Link>
      </div>

      {currItemInfo?.category && 
      <>
      <SuggestionCard suggestion={currItemInfo}/>
      <div className="comments-container bg-white">
        <h2 className="my-2 p-2">{comments.filter(c=>c.commentId == currItemInfo.id).length} Comments</h2>
        {comments.filter(c=>c.commentId == currItemInfo.id).map(comment=>(
          <CommentCard id={comment.id} isReply={false} comment={comment} key={comment.id}/>
        ))}
        <AddComment commentId={currItemInfo.id}/>
      </div>
      </>
      }
        </div>
  )
}

export default FeedbackInfo