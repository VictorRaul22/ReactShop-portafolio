import React from 'react'
import "@styles/ButtonClose.scss"
import closed from '@icons/icon_close.png'
function ButtonClose() {
  return (
    <button className='ButtonClose'>
      <img src={closed}/>
    </button>
  )
}

export {ButtonClose}