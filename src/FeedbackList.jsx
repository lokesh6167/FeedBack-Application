// import PropTypes from 'prop-types'
import FeedbackItem from "./components/FeedbackItem";
import {motion ,AnimatePresence} from 'framer-motion';
import {useContext} from 'react'
import FeedbackContext from './components/context/FeedbackContext';

function FeedbackList(){
    
    const {feedback}=useContext(FeedbackContext);
    if(!feedback || feedback.length===0){
        return <p>No feedback Yet!!</p>
    }
    return(
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item)=>{
                return <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <FeedbackItem key={item.id} item={item} />
                </motion.div>
        })}
            </AnimatePresence>
        </div>
    )
};

// FeedbackList.propTypes={
//     feedback:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             rating:PropTypes.number.isRequired,
//             text:PropTypes.string.isRequired
//         })
//     )
// }
export default FeedbackList;