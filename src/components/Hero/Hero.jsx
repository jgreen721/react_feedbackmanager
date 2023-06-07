import React from 'react'
import { desktopHeroBg,tabletHeroBg,mobileHeroBg, iconHamburger,iconClose } from '../../const'
import "./Hero.css"
const Hero = ({showMobile,setShowMobile}) => {
  return (
    <div className="hero info-row-div">
  {/* <picture>
      <source media="(min-width:650px)" srcSet={desktopHeroBg}/>
      <source media="(min-width:465px)" srcSet={tabletHeroBg}/>
      <img className="hero-bg" src={mobileHeroBg} alt="img"/>
    </picture> */}
    <div className="hero-content">
        <div className="hero-content-container">
<h1>Frontend Mentor</h1>
<h3>Feedback Board</h3>
</div>
<div className="mobile-icons">
  <img onClick={()=>setShowMobile(!showMobile)} src={showMobile ? iconClose : iconHamburger} alt="" />
</div>
</div>
    </div>
  )
}

export default Hero