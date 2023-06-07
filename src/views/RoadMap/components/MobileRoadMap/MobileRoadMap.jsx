import React, {useState} from 'react'
import RoadMapCard from '../RoadMapCard/RoadMapCard';
import {Selector} from "./components"
import "./MobileRoadMap.css"

const MobileRoadMap = ({items}) => {
    const [selected, setSelected] = useState("Live");
    // console.log(items)
     const [currData,setCurrData] = useState(items.filter((i)=>i.name == selected)[0]);
    //  console.log(currData)

    const handleChangeSelected =(category)=>{
        // console.log("new category!",category,items)
        setSelected(category)
   console.log(currData)
        setCurrData(items.filter((i)=>i.name == category)[0]);
    }
  return (
    <div className="mobile-roadmap-container">
        <Selector currData={currData} selected={selected} handleChangeSelected={handleChangeSelected} categories={items.map(i=>({name:i.name,total:i.data.length}))}/>
        <div className="mobile-content-padding-container text-dark">
        <h2>Current:{currData.name} ({currData.data.length})</h2>
        <h4 className="thin muted">{currData.description}</h4>
        <ul className="featured-items-list">
          {currData.data.map(item=>(
            <RoadMapCard key={item.id} color={currData.color} roadMapData={item}/>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default MobileRoadMap