import React from 'react'
import {Categories, RoadMap} from ".."
import "./MobileMenu.css"

const MobileMenu = ({showMobile}) => {
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-menu"}>
        <Categories isMobile={true}/>
     
         <RoadMap isMobile={true}/>
        
     
    </div>
  )
}

export default MobileMenu