import React from 'react'
import { commentsIcon } from '../../../const'
import "./CommentsCounter.css"
import { useNavigate } from 'react-router'
import { useAppContext } from '../../../context/AppContext'

const CommentsCounter = ({id,commentsTotal}) => {
  const {getCurrItem} = useAppContext();
  const navigate = useNavigate();


  const handleViewComments=(id)=>{
      getCurrItem(id);
      navigate("/comments")
  }
  return (

    <div onClick={()=>handleViewComments(id)} className="comments-div">
  <img className="comments-icon" src={commentsIcon} alt="" />
  <p className="body-text-sm bold">{commentsTotal}</p>
</div>
  )
}

export default CommentsCounter