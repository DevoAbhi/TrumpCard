import React from 'react'

import './Button.css'
function Button(props) {
  return (
    <div className='btn' style={props.button ? {cursor:"pointer"}: {}}>
        {props.children}
    </div>
  )
}

export default Button