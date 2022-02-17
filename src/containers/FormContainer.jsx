import React from 'react'
import "@styles/FormContainer.scss"
import {Logo} from "../components/atomo/Logo"
function FormContainer({children,WithHeader,title,subtitle,heightAll,center,gap,logo}) {
  return (
    <div className={`Centrado ${WithHeader?'Centrado-withHeader':''}`}>
      <div className={`
        form-container 
        ${heightAll?'form-container-height-all':''} 
        ${center?'form-container-center':''}
        ${gap?'form-container-gap':''}
      `.replaceAll(/\s+/g," ")}>
        {logo?<Logo form/>:""}
        {title?(<h1>{title}</h1>):""}
        {subtitle?(<p>{subtitle}</p>):""}
        <form className={`form  ${heightAll?'form-height-All':''}`}>
          {children}
        </form>
      </div>
    </div>
  )
}

export {FormContainer}