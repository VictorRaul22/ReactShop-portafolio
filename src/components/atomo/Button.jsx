import React from 'react'
import "@styles/Button.scss"
function Button(props) {
  return (
    <button
      type={props.type}
      className={`Button ${props.secondary && 'Button-secondary'}`}>
      {props.children}
    </button>
  )
}

export {Button}