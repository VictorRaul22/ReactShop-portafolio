import React from 'react'
import "@styles/ListProducs.scss"
function ListProducs({children,render,products}) {
  const renderFunc =children || render;
  const productTest={
    src:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    alt:"bike",
    price:"120,00",
    name:"Round shelf",
  }
  // console.log(products)
  return (
    <div className='ListProducs'>
      {products.map((product)=>renderFunc({
        id:product.id,
        name:product.title,
        price:product.price,
        src:product.images[0],
        alt:product.title,
        // CartAdded:product.addToCart,
      }))}
    </div>
  )
}

export {ListProducs}