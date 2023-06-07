import React, {useState} from 'react'
import "./FormDiv.css"
import FormSelect from "../FormSelect/FormSelect"
import {arrowUp,arrowDown} from "../../../const"
import "./FormDiv.css"

const FormDiv = ({label,displayLabel,description,options=[],placeholder,isSelect,isTextArea}) => {
  const [showSelect,setShowSelect] = useState(false);
  const [selected,setSelected] = useState(options[2]?.name)
  return (
    <div className="form-div">
        <label htmlFor={label}><h4>{displayLabel}</h4></label>
        <p className="thin body-text-sm mb-1">{description}</p>
        {isSelect ? <><input type="hidden" value={selected} name={label} label={label}/><div onClick={()=>setShowSelect(!showSelect)} className="select-div"><div className="select-div-input"><p>{selected}</p><img className="select-arrow-icon" src={showSelect ? arrowUp : arrowDown}/></div><FormSelect selected={selected} setSelected={setSelected} showSelect={showSelect} options={options}/></div> </> :  isTextArea ? <textarea placeholder={placeholder}  label={label} name={label} className="form-text"/> : <input type="text" className="form-control" placeholder={placeholder} name={label} autoComplete="off"/>}
    </div>
  )
}

export default FormDiv