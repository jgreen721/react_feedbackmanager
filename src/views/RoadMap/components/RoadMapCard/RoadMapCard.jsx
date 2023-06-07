import React from 'react'
import { CategoryItem,VoteCounter,CommentsCounter } from '../../../../components/Generics'
import {commentsIcon} from "../../../../const"
import "./RoadMapCard.css"

const RoadMapCard = ({color,roadMapData}) => {
  // console.log(roadMapData)




  const formatStatus=(status)=>{
    let formattedStatus="";

    for(let i=0;i<status.length;i++){
      if(i == 0)formattedStatus += status[0].toUpperCase();
      else if(status[i] == " " || status[i] == "-"){
        formattedStatus += status[i];
        formattedStatus += status[i+1].toUpperCase();
        i++;
      }
else{
  formattedStatus += status[i]
}
    }

    return formattedStatus

  }
  return (
    <div  className={`roadmap-card border-${color}`}>
      <div className="top-card-row my-2">
        <div className={`circle bg-${color}`}></div>
       <p> {formatStatus(roadMapData.status)}</p>
      </div>
      <h4>{roadMapData.title}</h4>
      <p className="body-text-sm muted my-2">{roadMapData.description}</p>
      <div>
      <CategoryItem category={roadMapData.category}/>
      </div>
      <div className="bottom-card-row my-2">
<VoteCounter votes={roadMapData.upvotes} direction="row"/>
{/* <div className="comments-div">
  <img className="comments-icon" src={commentsIcon} alt="" />
  <p className="body-text-sm bold">{roadMapData.comments ? roadMapData.comments.length : 0}</p>
</div> */}
<CommentsCounter commentsTotal={roadMapData.comments.length}/>
      </div>
    </div>
  )
}

export default RoadMapCard