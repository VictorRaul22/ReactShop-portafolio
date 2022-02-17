import React from 'react'
// const cartNotifi='@icons/icon_shopping_cart_notification.svg';
import cartNotifi from "@icons/icon_shopping_cart_notification.svg";
import cartAdd from "@icons/bt_add_to_cart.svg";
function ShopingCard(props) {
  if(props.type==="notification"){
    return (
      <img src={cartNotifi} alt="shopping cart n" />
    )
  }else if(props.type==="add"){
    return (
      <img src={cartAdd} alt="shopping cart" />
    )
  }
}

export {ShopingCard}