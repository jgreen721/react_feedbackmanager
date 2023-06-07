import React from 'react'
import {BackBtn, Button} from "../../components/Generics"
import {Link} from "react-router-dom"
import {whitePlusIcon} from "../../const"
import {RoadMapCard,MobileRoadMap} from "./components"
import "./RoadMap.css"
import { useAppContext } from '../../context/AppContext'

const RoadMap = () => {
  const {planned,inProgress,live} = useAppContext();
  const roadMapItems=[
    {id:1,name:"Planned",description:"Ideas prioritized for research",color:"peach",data:planned},
    {id:2,name:"In-Progress",description:"Currently being developed",color:"violet",data:inProgress},
    {id:3,name:"Live",description:"Release features",color:"blue",data:live},
  ]
  return (
    <div className="roadmap-parent">
      <div className="roadmap-header">
        <div className="left-column">
          <BackBtn color="white"/>
          <h1>Roadmap</h1>
        </div>
        <div className="righ-column">
<Link to="/add">
  <Button color="violet" handleAction={()=>{}}>
    <img src={whitePlusIcon} className="btn-icon" alt="btn-icon"/>
    Add Feedback
  </Button>
</Link>
        </div>
      </div>
      <ul className="desktop-items-list">
        {roadMapItems.map((item)=>(
        <li key={item.id} className="item-column">
          <div className="item-column-header">
            <div className="my-2">
            <h2>{item.name}({item.data.length})</h2>
            <h3 className="thin">{item.description}</h3>
            </div>
            <ul className="item-items-list">
              {item.data.map(mapCardItem=>(
                <RoadMapCard color={item.color} key={mapCardItem.id} roadMapData={mapCardItem}/>
              ))}
            </ul>
          </div>
        </li>
))}
      </ul>
      <div className="mobile-roadmap-view">
        <MobileRoadMap items={roadMapItems}/>
      </div>
    </div>
  )
}

export default RoadMap