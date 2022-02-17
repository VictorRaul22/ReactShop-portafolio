import React from 'react'
import "../../styles/NavVertical.scss"
function NavVertical(props) {
  return (
  <div className="desktop-menu">
    <ul>
      {props.children}
    </ul>
  </div>
  )
}

export {NavVertical}