import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from './FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './components/pages/About';
import AboutQuestionLink from './components/AboutQuestionLink';
import Post from './components/Post';
import {FeedbackProvider} from './components/context/FeedbackContext';

function App() {
    return (
        <>
            <Header bgColor="rgba(0,0,0,0.4)" color="rose" />
            <FeedbackProvider>
            <Router>
                <div className='container'>
                    <Routes>
                        <Route strict path="/" element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList />
                                <AboutQuestionLink/>
                            </>
                        }>
                        </Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/post" element={<Post />}></Route>
                    </Routes>
                </div>
            </Router>
            </FeedbackProvider>
        </>
    )
}
export default App;