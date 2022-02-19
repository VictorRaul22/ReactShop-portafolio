import React from 'react'
import '@styles/NavBar.scss'
function NavBar(props) {
  return (
    <div className={`NavBar ${props.right && 'NavBar-right'}`}>
      {props.children}
    </div>
  )
}

export {NavBar}