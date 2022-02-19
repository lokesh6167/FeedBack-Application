import React from "react";
import { FaQuestion } from "react-icons/fa";
import {Link} from 'react-router-dom'
function AboutQuestionLink() {
  return (
    <div className="about-link">
      <Link to={{
          pathname:"/about",
          search:"?name=lokesh",
          hash:"#hello"
      }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutQuestionLink;
