import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import "./CategoryItem.css"

const CategoryItem = ({category}) => {
  const {curr,handleChangeCategory} = useAppContext();
  return (
    <li onClick={()=>handleChangeCategory(category)} className={curr == category ? "category-item highlight" : "category-item"}>
      <p className="body-text-sm">{category}</p>
      </li>
  )
}

export default CategoryItem