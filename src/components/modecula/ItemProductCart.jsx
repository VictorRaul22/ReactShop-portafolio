import React from 'react'
import "@styles/ItemProductCart.scss"
import { ImgProduct } from '../atomo/ImgProduct'
import {Texto} from '../atomo/Texto'
import close from "@icons/icon_close.png"
function ItemProductCart(props) {
  // shopping-cart
  const {removed=false}=props
  return (
    <div className={`ItemProductCart ${removed?'ItemProductCart-removed':''}`}>
      <ImgProduct sm src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
      {
        (!removed)
        ?<React.Fragment><Texto gray>Bike</Texto><Texto bold>$30,00</Texto></React.Fragment>
        :<Texto>REMOVED FROM CART</Texto>
      }
      <img src={close} alt="close"/>
    </div>
  )
}

export {ItemProductCart}