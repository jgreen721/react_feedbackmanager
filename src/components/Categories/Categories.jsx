import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {CategoryItem} from "../Generics"
import "./Categories.css"

const Categories = ({isMobile}) => {
    const {categories} = useAppContext();
   return (
       <div className={isMobile ? "mobile-categories-list-div" : "categories-list-div"}>
    <ul className="categories-list info-row-div">
{categories.map(c=>(
    <CategoryItem key={c.id} category={c.category} isActive={false}/>
))}
    </ul>
    </div>
  )
}

export default Categories