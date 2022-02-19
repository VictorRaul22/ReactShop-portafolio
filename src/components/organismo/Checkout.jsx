import React,{useContext} from 'react'
import "@styles/Checkout.scss"
import {Texto} from "@atomo/Texto"
import flecha from "@icons/flechita.svg";
import {Button} from "@atomo/Button"
import {ItemProductCart} from '@molecula/ItemProductCart';
import {SummaryCart} from "@molecula/SummaryCart"
import {ListProductCart} from "@molecula/ListProductCart"
import AppContext from "@context/AppContext";

function Checkout(props) {
  const {state}=useContext(AppContext);
  const sumTotal=()=>{
    const reducer=(accumulator,currentValue)=> accumulator+ currentValue.price;
    const sum=state.cart.reduce(reducer,0);
    return sum;
  }
    // console.log(state);
  return (
    <div className={`Checkout ${props.heightAll?'Checkout-heightAll':''}`}>
      <div className="title-Checkout">
        <img src={flecha} alt="arrow"/>
        <Texto bold lg>Shopping cart</Texto>
      </div>
        <div className="my-order-content">
          <ListProductCart>
            {state.cart.map((product)=>(
              <ItemProductCart product={product} key={`shopping-${product.key}`}/>

            ))}
            {/* <ItemProductCart removed/> */}

          </ListProductCart>
          <div>
            <SummaryCart price={`${sumTotal()}`}/>
            <Button type="submit">Checkout</Button>
          </div>
        </div>
      </div>
    
  )
}

export {Checkout}