import React from 'react'
import "./ReplyBtn.css"

const ReplyBtn = ({handleAction}) => {
  return (
    <button onClick={handleAction} className="reply-btn bold">Reply</button>

  )
}

export default ReplyBtn