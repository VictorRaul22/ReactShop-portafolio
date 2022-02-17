import React from 'react'
import "@styles/Product.scss"
function Product({children}) {
  return (
    <div className='Product'>
      {children}
    </div>
  )
}

export {Product}