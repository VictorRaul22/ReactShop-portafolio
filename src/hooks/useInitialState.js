import { useState } from "react";
const initialState = {
  cart: []
}
let cartkey = 0;
const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [toggleOrders, setToggleOrders] = useState(false);
  const addTocart = (payload) => {
    // console.log(payload)
    setState({
      ...state,
      cart: [...state.cart, { ...payload, key: cartkey, productAddedCart: true }]
    })
    // console.log(payload.id)
    cartkey++;
    // console.log(cartkey)
  }
  const productAdded = (product) => {
    return state.cart.find(productCart => productCart.id === product.id)
      ? true
      : false
  }
  const removeFromcart = (payload) => {

    // state.cart[payload]
    // console.log([...state.cart.filter(item => item.key !== payload.key), { ...payload, productAddedCart: false }])
    // state.cart[]
    setState({
      ...state,
      cart: state.cart.filter(item => item.key !== payload.key)
    })
  }
  return {
    state,
    addTocart,
    removeFromcart,
    toggleOrders,
    setToggleOrders,
    productAdded
  };
}
export default useInitialState;