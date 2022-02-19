import React from 'react'
import PropTypes from 'prop-types'


function Header({ text,bgColor,color }) {
    const headerStyles={backgroundColor:bgColor,color:color}
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "FeedBack-UI",
    bgColor:"blue",
    color:'red'
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor:PropTypes.string,
    color:PropTypes.string
}
export default Header