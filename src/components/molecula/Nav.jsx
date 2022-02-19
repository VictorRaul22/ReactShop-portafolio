import React from 'react'
import "@styles/Nav.scss"
function Nav(props) {
  return (
    <ul 
      className={`
        Nav 
        ${props.left?'Nav-left':''}
      `.replaceAll(/\s+/g, " ")}
    >
      {props.children}
    </ul>
  )
}

export {Nav}