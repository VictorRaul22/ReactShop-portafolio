import React from 'react'
import {OptionSearch} from "../components/organismo/OptionSearch";
import {Input} from "../components/atomo/Input"
import { TypeSearch } from '../components/modecula/TypeSearch';
import {Texto} from "../components/atomo/Texto"
import {ListProducs} from "../containers/ListProducs"
import {Product} from '../components/organismo/Product';
import {ImgProduct} from "../components/atomo/ImgProduct";
import {ShopingCard} from "../components/atomo/shopingCard";
// import {Checkout} from "../components/organismo/Checkout"
// import {AddContainer} from "../components/organismo/AddContainer"
// import {Aside} from "../containers/Aside";

import "@styles/Home.scss";
function Home() {
  return (
    <div className='Home'>
      <OptionSearch>
        <Input placeholder="Search product" type="search"/>
        <TypeSearch>
          <Texto bold sm inline>Order </Texto><Texto thin inline>Most recent</Texto>
        </TypeSearch>
      </OptionSearch>
      <ListProducs>
        <Product>
          <ImgProduct 
          src={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} 
          alt={"bike"}/>
          <div className="Product-info">
            <div>
              <Texto bold >$120,00</Texto>
              <Texto thin gray sm>Round shelf</Texto>
            </div>
            <figure>
              <ShopingCard type="add"/>
            </figure>
          </div>
        </Product>
      </ListProducs>
      {/* <Aside>
        <Checkout heightAll/>
      </Aside> */}
    </div>
    
  )
}

export {Home}