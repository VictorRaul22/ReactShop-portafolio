import React from 'react'
import '@styles/ListProductCart.scss'
function ListProductCart({children}) {
  return (
    <div className='ListProductCart'>
      {children}
    </div>
  )
}

export {ListProductCart}