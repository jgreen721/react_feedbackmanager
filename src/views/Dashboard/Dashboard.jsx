import React, {useState} from 'react'
import {Hero,Categories,RoadMap,SuggestionsRow,Empty,Suggestions,MobileMenu} from "../../components"
import { useAppContext } from '../../context/AppContext'

import "./Dashboard.css"

const Dashboard = () => {
  const [showMobile, setShowMobile] = useState(false);
  const {suggestions} = useAppContext();


  console.log(suggestions)
  return (
    <div className="dashboard">
              <div className="info-column">
        <Hero showMobile={showMobile} setShowMobile={setShowMobile}/>
        <div className="desktop-info-col">
          <Categories isMobile={false}/>
          </div>
          <div className="desktop-info-col">
          <RoadMap isMobile={false}/>
          </div>
        
      </div>
      <div className="main-column">
      <MobileMenu showMobile={showMobile}/>

        <SuggestionsRow/>
        <div className="feedback-items-parent">

{suggestions?.length == 0 ? <Empty/> : <Suggestions suggestions={suggestions}/>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard