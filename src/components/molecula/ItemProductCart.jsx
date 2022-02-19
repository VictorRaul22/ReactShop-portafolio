import React,{useState,useContext} from 'react'
import AppContext from '@context/AppContext'
import close from "@icons/icon_close.png"
import { ImgProduct } from '@atomo/ImgProduct'
import {Texto} from '@atomo/Texto'
import "@styles/ItemProductCart.scss"
function ItemProductCart({product}) {
  
  // console.log(product);
  // const [removed, setRemoved] = useState(false)
  let removed=false;
  const {removeFromcart}=useContext(AppContext)
  const handleRemove=product=>{
    removeFromcart(product);
    // setRemoved(true)
  }
  const limitName=(text)=>{
    let texto=text;
    if(text.length>20){
      texto=text.slice(0,20)+"..."
    }
    return texto;
  }
  return (
    <div className={`ItemProductCart ${removed?'ItemProductCart-removed':''}`}>
      <ImgProduct src={product.src} alt="bike" sm/>
      {
        (!removed)
        ?<React.Fragment><Texto gray sm>{limitName(product.name)}</Texto><Texto bold>${product.price}</Texto></React.Fragment>
        :<Texto>REMOVED FROM CART</Texto>
      }
      <div onClick={()=>handleRemove(product)}>
        <img src={close} alt="close"/>
      </div>
    </div>
  )
}

export {ItemProductCart}