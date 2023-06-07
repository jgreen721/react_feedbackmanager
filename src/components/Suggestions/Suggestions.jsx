import React from 'react'
import "./Suggestions.css"
import {SuggestionCard} from "./components"
 
const Suggestions = ({suggestions}) => {
  return (
    <div className="suggestions-panel">
        <div className="suggestions">
            {suggestions.map(suggestion=>(
                <SuggestionCard suggestion={suggestion} key={suggestion.id}/>
            ))}
        </div>
    </div>
  )
}

export default Suggestions