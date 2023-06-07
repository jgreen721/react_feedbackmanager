import React, {useRef} from 'react'
import { BackBtn,FormDiv,Button } from '../../components/Generics'
import {plusIcon} from "../../const"
import {Link, useNavigate} from "react-router-dom"
import "./Add.css"
import { useAppContext } from '../../context/AppContext'


const Add = () => {
  const categories=[
    {id:1,name:"Features",isSelected:false},
    {id:2,name:"UI",isSelected:false},
    {id:3,name:"UX",isSelected:false},
    {id:4,name:"Enhancement",isSelected:false},
    {id:5,name:"Bug",isSelected:false},
  ]
  const navigate = useNavigate();
  const formRef = useRef();
  const {addFeedbackItem} = useAppContext();


  const handleAddFeedback=(e)=>{
    e.preventDefault();
    let newFormData = new FormData(formRef.current);
    console.log(newFormData.get("title"));
    console.log(newFormData.get("category"));
    console.log(newFormData.get("detail"));

    let newFeedbackItem={
      title:newFormData.get("title"),
      category:newFormData.get("category"),
      description:newFormData.get("detail"),
      comments:[],
      upvotes:0
    }

    addFeedbackItem(newFeedbackItem)
  }
  return (
    <div className="modal-container">
      <BackBtn/>
      <div className="modal">
        <div className="modal-icon-div">
          <img className="modal-icon" src={plusIcon} alt="" />
        </div>
        <h1 className="modal-header bold">Create New Feedback</h1>
<form ref={formRef} className="modal-form">
  <FormDiv displayLabel="Feedback Title" label="title" placeholder="Title" description="Add a short, descriptive headline" isSelect={false} isTextArea={false} options={[]}/>
  <FormDiv displayLabel="Category" label="category" placeholder={categories[0]} description="Choose a category for your feedback" isSelect={true} isTextArea={false} options={categories}/>
  <FormDiv displayLabel="Feedback Detail" label="detail" placeholder="Feedback details..." description="Include any specific comments on what should be improved, added,etc." isSelect={false} isTextArea={true} options={[]}/>

  <div className="form-div form-btns">
    <Link to='/'>
    <Button color="dark" handleAction={()=> navigate("/")}>Cancel</Button>
    </Link>
    <Button color="violet" handleAction={(e)=>handleAddFeedback(e)}>Add Feedback</Button>

  </div>
</form>
      </div>
    </div>
  )
}

export default Add