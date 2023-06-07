import React from 'react'
import {Button} from "../Generics"
import {Link} from "react-router-dom"
import {emptyIllustrationIcon, whitePlusIcon} from "../../const"
import "./Empty.css"

const Empty = () => {
  return (
    <div className="empty-panel">
        <div className="empty-icon-div">
            <img src={emptyIllustrationIcon} alt="" />
        </div>
            <h1 className="empty-header">There is no feedback yet.</h1>
            <p className="body-text-md empty-blurb">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <Link to="/add">
            <Button color="violet" handleAction={()=>{}}>
                <img className="btn-icon" src={whitePlusIcon} alt="" />
                Add Feedback
            </Button>
            </Link>
        
    </div>
  )
}

export default Empty