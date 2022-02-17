import React from 'react'
import "@styles/TypeSearch.scss"
function TypeSearch(props) {
  return (
    <div className='TypeSearch'>
      {props.children}
    </div>
  )
}

export  {TypeSearch}