import React, {useState} from 'react'
import { checkIcon } from '../../../const'
import {useLocation} from "react-router-dom"
import "./FormSelect.css"

const FormSelect = ({options,showSelect,selected,setSelected, handleChangeCategory}) => {
  const location = useLocation()

  const handleChangeSelect=(e)=>{

    // if(location.pathname == "/add"){
      setSelected(e.target.textContent)
    // }
    // else{
    //   console.log("Ummm?")
    //   // handleChangeCategory(e.target.value)
    // }
     console.log("HISTORY",location.pathname,selected)
  }
  return (
    <ul className={showSelect ? "form-select" : "form-select hide-form-select"}>
        {options.map(option=>(
            <li onClick={(e)=>handleChangeSelect(e)} key={option.id} className="form-select-item body-text-reg">{option.name}
            {selected == option.name && <img className="check-icon" src={checkIcon} alt="" />}
            </li>
        ))}
    </ul>
  )
}

export default FormSelect