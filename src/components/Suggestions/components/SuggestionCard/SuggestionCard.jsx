import React from 'react'
import { CategoryItem, CommentsCounter, VoteCounter } from '../../../Generics'
import {Link} from "react-router-dom";
import "./SuggestionCard.css"
import { useAppContext } from '../../../../context/AppContext';

const SuggestionCard = ({suggestion}) => {
  const {comments} = useAppContext();
  // console.log(suggestion)
  return (
    <div className="suggestion-card text-dark bg-white flex justify-between">
      <div className="suggestion-card-left-column flex align-top gap-2">
        <div className="desktop">
      <VoteCounter direction="column" votes={suggestion.upvotes}/>
      </div>
      <div className="suggestion-content-column">
        <h3>{suggestion.title}</h3>
        <h5 className="body-text-sm thin my-2">{suggestion.description}</h5>
        <CategoryItem category={suggestion.category}/>
      </div>
      </div>
      <div className="desktop">
      <div className="suggestion-card-right-column flex justify-center align-center">

<CommentsCounter id={suggestion.id} commentsTotal={comments.filter(c=>c.commentId == suggestion.id).length}/>

      </div>
      </div>
      <div className="mobile mt-2">
        <div className="flex justify-between my-2">
        <VoteCounter direction="row" votes={suggestion.upvotes}/>
        <CommentsCounter id={suggestion.id} commentsTotal={comments.filter(c=>c.commentId == suggestion.id).length}/>
</div>
      </div>
    </div>
  )
}

export default SuggestionCard