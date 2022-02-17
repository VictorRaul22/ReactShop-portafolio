import React from 'react'
import "@styles/ImgProduct.scss"
function ImgProduct(props) {
  return (
    <img src={props.src} alt={props.alt} className={`ImgProduct ${props.sm?'ImgProduct-sm':''}`}/>
  )
}

export {ImgProduct}