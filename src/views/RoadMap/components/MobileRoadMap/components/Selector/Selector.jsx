import React from 'react'
import "./Selector.css"

const Selector = ({categories,selected, handleChangeSelected}) => {
  return (
    <ul className="categories-selector">
        {categories.map(c=>(
            <li onClick={()=>handleChangeSelected(c.name)} key={c.name} className={selected == c.name ? "category-selection-item body-text-sm text-dark extrabold highlight-border-bottom" : "category-selection-item body-text-sm text-dark extra-muted bold"}>{c.name}({c.total})</li>
        ))}
    </ul>
  )
}

export default Selector