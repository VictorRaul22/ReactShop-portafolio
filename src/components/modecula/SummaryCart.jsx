import React from 'react'
import {Texto} from '../atomo/Texto'
import "@styles/SummaryCart.scss"
function SummaryCart() {
  return (
    <div className="SummaryCart">
        <Texto>
          <span>Total</span>
        </Texto>
        <Texto>$560.00</Texto>
    </div>
  )
}

export {SummaryCart}