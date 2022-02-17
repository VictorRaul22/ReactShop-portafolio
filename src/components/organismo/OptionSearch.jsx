import React from 'react'
import "@styles/OptionSearch.scss"
function OptionSearch(props) {
  return (
    <div className='OptionSearch'>
      {props.children}
    </div>
  )
}

export {OptionSearch}