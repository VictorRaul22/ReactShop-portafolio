import React from 'react'
import { ItemOrder } from '../components/modecula/ItemOrder'
import { ListProductCart } from '../components/modecula/ListProductCart'
import { OrderContainer } from '../containers/OrderContainer'

function Orders() {
  return (
    <OrderContainer>
      <ListProductCart>
        <ItemOrder/>
        <ItemOrder details/>
      </ListProductCart>
    </OrderContainer>
  )
}

export {Orders}