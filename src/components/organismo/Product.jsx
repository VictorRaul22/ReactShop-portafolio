import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import {ImgProduct} from '@atomo/ImgProduct'
import {Texto} from '@atomo/Texto'
import {ShopingCard} from '@atomo/ShopingCard'
import cartAdd from "@icons/bt_add_to_cart.svg";
import cartAdded from "@icons/bt_added_to_cart.svg"
import "@styles/Product.scss"
function Product({product}) {
  const {price,src,alt,name}=product;
const {addTocart,productAdded }=useContext(AppContext);

const handleClick=(item)=>{
  if(!productAdded(item)){
    addTocart(item)
  }
}
  return (
    <div className='Product'>
      <ImgProduct 
          src={src} 
          alt={alt}
          />
      <div className="Product-info">
        <div className="Product-main-info">
          <Texto bold >${price}</Texto>
          <Texto thin gray sm>{name}</Texto>
        </div>
        <figure onClick={()=>handleClick(product)} 
        className={`product-figure ${productAdded(product) && 'product-figure-CartAdded'}`}>
          {
            productAdded(product)
            ?<ShopingCard src={cartAdded} alt="producto añadido al carro"/>  
            :<ShopingCard src={cartAdd} alt="añadir producto al carro"/>
          }
        </figure>
      </div>
    </div>
  )
}

export {Product}