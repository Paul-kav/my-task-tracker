import React from 'react'
import  PropTypes from 'prop-types'
const Button = ({color, text}) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor: color}}>{text}</button>
    </div>
    )
}

Button.defaultProps ={
    color: 'skyblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button
