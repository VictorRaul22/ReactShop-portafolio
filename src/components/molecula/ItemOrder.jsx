import React from 'react'
import "@styles/ItemOrder.scss"
import flecha from "@icons/flechita.svg"
import { Texto } from "@atomo/Texto.jsx"
function ItemOrder({details}) {
  return (
    <div className={`ItemOrder ${details?'ItemOrder-details':''}`}>
      <div className='ItemOrder-left'>
        <Texto bold sm>03.25.21</Texto>
        <Texto gray sm>6 articles</Texto>
      </div>
      <Texto bold >$560.00</Texto>
      <img src={flecha} alt="arrow" />
    </div>
  )
}

export {ItemOrder}