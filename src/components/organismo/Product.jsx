import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import {ImgProduct} from '@atomo/ImgProduct'
import {Texto} from '@atomo/Texto'
import {ShopingCard} from '@atomo/ShopingCard'
import "@styles/Product.scss"
function Product({product}) {
  const {price,src,alt,name}=product;
const {addTocart }=useContext(AppContext);

const handleClick=(item)=>{
  addTocart(item)
  // console.log(item)
}
  return (
    <div className='Product'>
      <ImgProduct 
          src={src} 
          alt={alt}
          />
      <div className="Product-info">
        <div>
          <Texto bold >${price}</Texto>
          <Texto thin gray sm>{name}</Texto>
        </div>
        <figure onClick={()=>handleClick(product)}>
          <ShopingCard type="add"/>
        </figure>
      </div>
    </div>
  )
}

export {Product}