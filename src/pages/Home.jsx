import React,{useState,useEffect} from 'react'
import {OptionSearch} from "@organismo/OptionSearch";
import {Input} from "@atomo/Input"
import { TypeSearch } from '@molecula/TypeSearch';
import {Texto} from "@atomo/Texto"
import {ListProducs} from "@containers/ListProducs"
import {Product} from '@organismo/Product';

import useGetProducts from '@hooks/useGetProducts';
// import {ImgProduct} from "@atomo/ImgProduct";
// import {ShopingCard} from "@atomo/ShopingCard";
// import {Checkout} from "../components/organismo/Checkout"
// import {AddContainer} from "../components/organismo/AddContainer"
// import {Aside} from "../containers/Aside";

import "@styles/Home.scss";
const API="https://api.escuelajs.co/api/v1/products?limit=20&offset=1"
function Home() {
  const products=useGetProducts(API)
  // console.log("render")
  return (
    <div className='Home'>
      <OptionSearch>
        <Input placeholder="Search product" type="search"/>
        <TypeSearch>
          <Texto bold sm inline>Order </Texto><Texto thin inline>Most recent</Texto>
        </TypeSearch>
      </OptionSearch>
      <ListProducs
        products={products}
        render={(product)=>(
          <Product
            key={product.id}
            product={product}
            />
        )}
      >
      </ListProducs>
    </div>
    
  )
}

export {Home}