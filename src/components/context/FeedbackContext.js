import { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([{
    id: 1,
    text: "This is my first create Context",
    rating: 9
  },
  {
    id: 2,
    text: "This is my second create Context",
    rating: 10
  },
  {
    id: 3,
    text: "This is my Third create Context",
    rating: 7
  }])

  const [feedbackEdit,setFeedbackEdit]=useState({
    item:null,
    edit:false
  })

  const handleUpdate=(id,upItem)=>{
    console.log("Updating feedback item");
    setFeedback(feedback.map((item)=>item.id===id?{...item,...upItem}:item))
    console.log(feedback);
  }

  const handleAdd = (newFeedback) => {
    newFeedback.id=uuidv4();
    setFeedback([...feedback, newFeedback]);
    console.log("Successufully added new feedback");
  }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
      console.log("deleted item with id:" + id);
    }
  }

  const handleEdit=(item)=>{
    setFeedbackEdit(
      {
        item,
      edit:true
      }
      );
}

return <FeedbackContext.Provider value={{
    feedback,
    handleDelete,
    handleAdd,
    handleEdit,
    feedbackEdit,
    handleUpdate,
    setFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}
export default FeedbackContext;