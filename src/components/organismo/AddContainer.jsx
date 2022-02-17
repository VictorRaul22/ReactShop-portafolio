import React from 'react'
import "@styles/AddContainer.scss"
import {Texto} from "../atomo/Texto"
import {Button} from "../atomo/Button"
import {ButtonClose}from "../atomo/ButtonClose";
function AddContainer() {
  return (
    <div className='AddContainer'>
      <ButtonClose/>
      <img className='AddContainer-img' src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
      <div className="AddContainer-product-info">
        <Texto bold>$120,00</Texto>
        <Texto gray>Retro refrigerator</Texto>
        <Texto sm gray>
          With its funcional and practical interior this refrigerator also fulfills a decorative
          function, adding personality and a retor-vintage aesthetic to your kitchen or workplace
        </Texto>
        <Button>Add to cart</Button>
      </div>
    </div>
  )
}

export {AddContainer}