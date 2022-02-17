import React from 'react'
import "../../styles/Menu.scss"
import menu from "@icons/icon_menu.svg"
function Menu() {
  return (
    <img src={menu} alt="menu" className="menu" />
  )
}

export {Menu}