import PropTypes from 'prop-types';
function Button({children,version,type,disabled}){
    return (
        <button type={type} className={`btn btn-${version}`} disbled={disabled}>
            {children}
        </button>
    )
}

Button.defaultProps={
    version:"primary",
    type:'button',
    disbaled:false
}
Button.propTypes={
    children:PropTypes.node,
    version:PropTypes.string,
    type:PropTypes.string,
    disabled:PropTypes.bool
}
export default Button;