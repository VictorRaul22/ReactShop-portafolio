import React from 'react'
import "@styles/MenuMobileContainer.scss"

function MenuMobileContainer({children}) {
  return (
    <div className='MenuMobileContainer'>
      {children}
    </div>
  )
}

export {MenuMobileContainer}