import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Button} from "../Generics"
import "./SuggestionsRow.css"
import {SortSelect} from './components'
import {suggestionsIcon, plusIcon, whiteArrowUp,whiteArrowDown} from "../../const"
import { useAppContext } from '../../context/AppContext'

const SuggestionsRow = () => {
    const {toggleModal,suggestions,currFilter} = useAppContext();
    const options=[
        {id:1,name:"Most Upvotes",isSelected:false},
        {id:2,name:"Least Upvotes",isSelected:true},
        {id:3,name:"Most Comments",isSelected:false},
        {id:4,name:"Least Comments",isSelected:false},
    ]
    const [showCategorySelect,setShowCategorySelect] = useState(false)


  return (
    <div className="suggestions-row">
        <div className="suggestions-row-column">
<img className="remove-mobile" src={suggestionsIcon} alt="" />
<h1 className="remove-mobile">{suggestions.length} Suggestions</h1>
<div className="sort-select-div">
    <label className="sort-select-label body-text-sm" onClick={()=>setShowCategorySelect(!showCategorySelect)} htmlFor="category">Sort by:{currFilter} <img src={showCategorySelect ?  whiteArrowUp : whiteArrowDown}/></label>
    <SortSelect showCategorySelect={showCategorySelect} options={options}/>
</div>

        </div>
       <Link to="/add"> 
          <Button color="violet" handleAction={toggleModal("add-feedback")}>
            <img src={plusIcon} alt="" />
                Add Feedback
          </Button>
      </Link>
    </div>
  )
}

export default SuggestionsRow