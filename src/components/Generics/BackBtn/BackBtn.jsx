import React from 'react'
import {Link} from "react-router-dom"
import {whiteArrowLeft,arrowLeft} from "../../../const"
import "./BackBtn.css"

const BackBtn = ({color=""}) => {
  return (
    <Link to="/" className={`back-btn-link body-text-sm text-${color}`}>
<img className="arrow-icon mr-3" src={color == "white" ? whiteArrowLeft : arrowLeft} alt="left-arrow"/>
Go Back
    </Link>
  )
}

export default BackBtn