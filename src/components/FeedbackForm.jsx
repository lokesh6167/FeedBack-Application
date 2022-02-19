import { useState,useContext,useEffect} from 'react';
import RatingSelect from './RatingSelect'
import Button from './shared/Button';
import Card from './Crad'
import FeedbackContext from './context/FeedbackContext';

function FeedbackForm(){
    const [comment,setComment]=useState("");
    const [btnDisabled,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState("");
    const [rating,setRating]=useState(10);
    const {handleAdd,feedbackEdit,handleUpdate}=useContext(FeedbackContext);
    useEffect(()=>{
        // console.log("I am feedback form");
        console.log("I am Comment:"+comment+"I am rating:"+rating);
        if(feedbackEdit.edit===true){
            // console.log("I am inside condition")
        setBtnDisabled(false);
        setComment(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const handleChange=(e)=>{
        if(comment===""){
            setBtnDisabled(true);
            setMessage("");
        }else if(comment!=="" && comment.trim().length<=10){
            setBtnDisabled(true);
            setMessage("Comment must be atleast 10 characters");
        }
        else{
            setBtnDisabled(false);
            setMessage("");
        }
        setComment(e.target.value);
    }
    const handleAddForm=(e)=>{
        e.preventDefault();
        console.log("Adding/Updating Feedback Item");
        if(comment.trim().length>10){
            const newComment={
                rating,
                text:comment
        }
        if(feedbackEdit.edit===true){
            console.log("Updating feedback item %d %d",feedbackEdit.item.id,newComment.rating)
            handleUpdate(feedbackEdit.item.id,newComment)
            }
        else{
                handleAdd(newComment);
            }
            setComment("");
        }
    }
    return (
        <div>
            <Card>
                <form onSubmit={handleAddForm}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                <input type="text" onChange={handleChange} value={comment} placeholder='Please mention your valuable comment here'/>
                <Button version="secondary" disabled={btnDisabled} type="submit">Submit</Button>
                </div>
                {message && <div className='message'>{message}</div>}
                </form>
            </Card>
        </div>
    )
}
export default FeedbackForm;