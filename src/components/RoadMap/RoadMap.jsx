import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {Link} from "react-router-dom"
import "./RoadMap.css"

const RoadMap = ({isMobile}) => {
    const {live,planned,inProgress} = useAppContext()
    const roadmap =[
        {id:1,color:"peach",name:"Planned",total:planned.length},
        {id:2,color:"violet",name:"In-Progress",total:inProgress.length},
        {id:3,color:"blue",name:"Live",total:live.length},
    ]
  return (
    <div className={isMobile ? "is-mobile-roadmap-card" : "roadmap-card info-row-div"}>
        <div className="roadmap-card-content">
        <div className="roadmap-top-row">
            <h1>Roadmap</h1>
            <Link to="/roadmap">
                
            <button className="btn btn-transparent">
                    View
            </button>
            </Link>
        </div>
        {roadmap.map(item=>(
            <li key={item.id} className="roadmap-item">
                <div className="roadmap-item-left-column">
                <div className={`circle bg-${item.color}`}></div>
                <h4>{item.name}</h4>
                </div>
                <h4 className="bold">{item.total}</h4>
            </li>
        ))}

        
</div>
    </div>
  )
}

export default RoadMap