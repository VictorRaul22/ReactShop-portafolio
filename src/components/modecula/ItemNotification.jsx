import React from 'react'
import "../../styles/ItemNotification.scss"
function ItemNotification(props) {
  return (
    <li className='ItemNotification'>
      {props.children}
    </li>
  )
}

export {ItemNotification}