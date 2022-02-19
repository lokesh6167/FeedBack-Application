
import Card from "../Crad";
import {Link} from 'react-router-dom'
function About(){
    return(
       <Card>
           <h2>Feedback Application</h2>
           <p>This is a simple React application to collect feedback</p>
           <p>Version@1.1.0</p>
           <Link to="/">Click here for home page</Link>
       </Card>
    )
}
export default About;