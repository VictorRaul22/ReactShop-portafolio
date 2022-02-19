import React from 'react'
import {Texto} from '@atomo/Texto'
import "@styles/SummaryCart.scss"
function SummaryCart({price}) {
  return (
    <div className="SummaryCart">
        <Texto>
          <span>Total</span>
        </Texto>
        <Texto>${price}</Texto>
    </div>
  )
}

export {SummaryCart}