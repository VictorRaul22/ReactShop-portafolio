import React from 'react'
import "@styles/Menu.scss"
import menu from "@icons/icon_menu.svg"
function Menu({setToggle}) {
  return (
    <div className="menu" onClick={()=>setToggle((oldToggle)=>!oldToggle)}>
      <img src={menu} alt="menu"  />
    </div>
  )
}

export {Menu}