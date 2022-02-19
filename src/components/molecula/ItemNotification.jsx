import React from 'react'
import "@styles/ItemNotification.scss"
function ItemNotification(props) {
  return (
    <div className='ItemNotification'>
      {props.children}
    </div>
  )
}

export {ItemNotification}