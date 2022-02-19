import React,{useContext} from "react";
import "@styles/Header.scss"
import {Logo}from "@atomo/Logo";
import {Menu} from "@atomo/Menu"
import {ItemLink} from "@atomo/ItemLink"
import {Nav} from "@molecula/Nav";
import { NavBar } from "@molecula/NavBar";
import {ListItems} from "@organismo/ListItems"
import {NavVertical} from "@molecula/NavVertical";
import { ShopingCard } from "@atomo/ShopingCard";
import {ItemNotification} from "@molecula/ItemNotification";
import {Aside} from "@containers/Aside";
import {Checkout} from "@organismo/Checkout"
import AppContext from "@context/AppContext"; 
function Header() {
  const {state}=useContext(AppContext);
  const [toggleOrders,setToggleOrders]=React.useState(false);
  return (
    <nav className="Header">
      <Menu/>
      <NavBar>
        <Logo/>
        <Nav left >
          <ItemLink name="All"/>
          <ItemLink name="Clothes"/>
          <ItemLink name="Electronics"/>
          <ItemLink name="Furniture"/>
          <ItemLink name="Toys"/>
          <ItemLink name="Others"/>
        </Nav>
      </NavBar>
      <NavBar right>
        <Nav>
          <ListItems 
            nameList="victor@example.com" 
            none
            secondNav={
              <NavVertical>
              <ItemLink name="My orders" black bold end />
              <ItemLink name="My account" black bold end/>
              <ItemLink name="Sing out"  green end inlineBlock/>
              </NavVertical> 
            }
          />
          <li onClick={()=>setToggleOrders(!toggleOrders)}>
            <ItemNotification className="navbar-shopping-cart">
              <ShopingCard type="notification"/>
              {state.cart.length>0?<div>{state.cart.length}</div>:null}
            </ItemNotification>
          </li>
        </Nav>
      </NavBar>
      {toggleOrders &&       
      <Aside >
        <Checkout heightAll/>
      </Aside>}
    </nav>
  );
}

export { Header };
