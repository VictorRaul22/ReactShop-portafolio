import React from 'react'
import '../../styles/Logo.scss'
import logo from "@logos/logo_yard_sale.svg"
function Logo(porps) {
  return (
    <img src={logo} alt="logo" className={`Logo ${porps.form?"Logo-form":""}`}/>
  )
}

export {Logo}