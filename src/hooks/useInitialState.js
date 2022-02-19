import { useState } from "react";
const initialState = {
  cart: []
}
let cartkey = 0;
const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const addTocart = (payload) => {
    // console.log(payload)
    setState({
      ...state,
      cart: [...state.cart, { ...payload, key: cartkey }]
    })
    cartkey++;
    // console.log(cartkey)
  }
  const removeFromcart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.key !== payload.key)
    })
  }
  return {
    state,
    addTocart,
    removeFromcart,
  };
}
export default useInitialState;