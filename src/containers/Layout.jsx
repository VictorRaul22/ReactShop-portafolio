import React from 'react'
// import "../../styles/Layout.scss"
import {Header} from "../components/organismo/Header"
function Layout({children}) {
  return (
    <div className='Layout'>
      <Header/> 
      {children}
    </div>
  )
}

export {Layout}