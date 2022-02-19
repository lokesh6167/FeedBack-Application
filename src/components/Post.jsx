import React from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import Card from './Crad';

function Post() {
    const status=200
    const navigate=useNavigate()
    
    if(status===404){
        return <Navigate to="/PageNotFound"/>
    }
    const handleNavigation=()=>{
        alert("Bye Bye post page!!")
        navigate("/about")
    }
    
  return (
    <Card>
        <h1>Hi I am post.</h1>
        <p>Click Submit button to navigate to about page.uSing useNavigate()</p>
        <input type="button" value="Submit" onClick={handleNavigation}/>
    </Card>
  )
}

export default Post
