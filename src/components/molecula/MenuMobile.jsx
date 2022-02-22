import React from 'react'
import { MenuMobileContainer } from '@containers/MenuMobileContainer'
import {LinkMobile} from '@atomo/LinkMobile'
import close from "@icons/icon_close.png"
function MenuMobile({setToggle}) {
  return (
    <MenuMobileContainer>
      <div className='CloseMenuMobile' onClick={()=>setToggle((oldToggle)=>!oldToggle)}>
        <img src={close} alt="close"/>
      </div>
      <ul className='ListaMenuMobile ListaMenuMobile-borde-bottom'>
        <LinkMobile href={"/"} value={"CATEGORIES"}/>
        <LinkMobile href={"/"} value={"All"}/>
        <LinkMobile href={"/"} value={"Clothes"}/>
        <LinkMobile href={"/"} value={"Electronics"}/>
        <LinkMobile href={"/"} value={"Furnitures"}/>
        <LinkMobile href={"/"} value={"Toys"}/>
        <LinkMobile href={"/"} value={"Other"}/>
      </ul>
      <ul className='ListaMenuMobile'>
        <LinkMobile href={"/"} value={"My orders"}/>
        <LinkMobile href={"/"} value={"My account"}/>
        <LinkMobile href={"/"} value={"victor@example.com"} thin/>
        <LinkMobile href={"/"} value={"Sign out"} green/>
      </ul>
    </MenuMobileContainer>
  )
}

export {MenuMobile}