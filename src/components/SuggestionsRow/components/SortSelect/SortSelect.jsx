import React from 'react'
import "./SortSelect.css"
import { checkIcon } from '../../../../const'
import { useAppContext } from '../../../../context/AppContext'

const SortSelect = ({options,showCategorySelect}) => {
  const {currFilter,handleChangeFilter} = useAppContext();
  return (
    <ul className={showCategorySelect ? "sort-select-items" : "sort-select-items hide-select-items"}>
        {options.map(option=>(
            <li onClick={()=>handleChangeFilter(option.name)} className="sort-select-item" key={option.id}>
              <p className="body-text-sm sort-select-padding-right">{option.name}</p>
              <div>
                {currFilter == option.name &&
              <img src={checkIcon} alt="" />
                }
              </div>
              </li>
        ))}
    </ul>
  )
}

export default SortSelect