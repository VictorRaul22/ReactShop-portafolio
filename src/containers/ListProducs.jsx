import React from 'react'
import "@styles/ListProducs.scss"
function ListProducs(props) {
  return (
    <div className='ListProducs'>
      {props.children}
    </div>
  )
}

export {ListProducs}