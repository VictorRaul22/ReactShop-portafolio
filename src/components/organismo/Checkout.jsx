import React from 'react'
import "@styles/Checkout.scss"
import {Texto} from "../atomo/Texto"
import flecha from "@icons/flechita.svg";
import {Button} from "../atomo/Button"
import {ItemProductCart} from '../modecula/ItemProductCart';
import {SummaryCart} from "../modecula/SummaryCart"
import {ListProductCart} from "../modecula/ListProductCart"
function Checkout(props) {
  return (
    <div className={`Checkout ${props.heightAll?'Checkout-heightAll':''}`}>
      <div className="title-Checkout">
        <img src={flecha} alt="arrow"/>
        <Texto bold lg>Shopping cart</Texto>
      </div>
        <div className="my-order-content">
          <ListProductCart>
            <ItemProductCart/>
            <ItemProductCart removed/>

          </ListProductCart>
          <div>
            <SummaryCart/>
            <Button type="submit">Checkout</Button>
          </div>
        </div>
      </div>
    
  )
}

export {Checkout}