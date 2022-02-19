import {FaTimes,FaEdit} from 'react-icons/fa'
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Card from './Crad';
import FeedbackContext from './context/FeedbackContext';
import {useContext} from 'react';

function FeedbackItem({item}){
    const [rating]=useState(item.rating);
    const [text]=useState(item.text);
    const {handleDelete,handleEdit}=useContext(FeedbackContext);

    return(
        <Card reverse={false}>
            <div className="num-display">{rating}</div>
            <button className="close" onClick={()=>handleDelete(item.id)}><FaTimes color="purple"/></button>
            <button className="edit" onClick={()=>handleEdit(item)}><FaEdit color="purple"/></button>
            <div className="text-display">{text}</div>
        </Card>
    );
}

FeedbackItem.propTypes={
    item:PropTypes.object.isRequired
}
export default FeedbackItem;
