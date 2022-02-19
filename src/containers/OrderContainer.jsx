import React from 'react'
import "@styles/OrderContainer.scss"
import { Texto } from '@atomo/Texto'
function OrderContainer({children}) {
  return (
    <div className='Order-container-general'>
      <div className='Order-container'>
        <Texto bold lg>My orders</Texto>
        {children}
      </div>
    </div>
  )
}
export {OrderContainer}