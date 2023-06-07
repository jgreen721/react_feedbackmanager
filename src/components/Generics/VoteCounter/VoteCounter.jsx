import React, {useState} from 'react'
import {arrowUp} from "../../../const"
import "./VoteCounter.css"

const VoteCounter = ({votes,direction}) => {
    const [count,setCount] = useState(votes)


    const handleAddVote=()=>{
        setCount((count)=>count+1)
    }
  return (
    <div className="vote-counter-div">
<button onClick={(handleAddVote)} className={direction == "row" ? "btn-transparent btn" : "btn-transparent btn column my-2"}>
    <img className="vote-arrow-icon" src={arrowUp} alt="" />
    <p className="text-blue bold">{count}</p>

</button>
    </div>
  )
}

export default VoteCounter