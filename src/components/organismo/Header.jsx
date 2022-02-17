import React from "react";
import "../../styles/Header.scss"
import {Logo}from "../atomo/Logo";
import {Menu} from "../atomo/Menu"
import {ItemLink} from "../atomo/ItemLink"
import {Nav} from "../modecula/Nav";
import { NavBar } from "../modecula/NavBar";
import {ListItems} from "../organismo/ListItems"
import {NavVertical} from "../modecula/NavVertical";
import { ShopingCard } from "../atomo/shopingCard";
import {ItemNotification} from "../modecula/ItemNotification"
function Header() {
  return (
    <nav>
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
          <ListItems nameList="platzi@example.com" none>
            <NavVertical>
              <ItemLink name="My orders" black bold end />
              <ItemLink name="My account" black bold end/>
              <ItemLink name="Sing out" green end inlineBlock/>
            </NavVertical>
          </ListItems>
          <ItemNotification className="navbar-shopping-cart">
            <ShopingCard type="notification"/>
            <div>2</div>
          </ItemNotification>
        </Nav>
      </NavBar>
    </nav>
  );
}

export { Header };
