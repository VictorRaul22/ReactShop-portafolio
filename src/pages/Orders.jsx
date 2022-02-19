import React from 'react'
import { ItemOrder } from '@molecula/ItemOrder'
import { ListProductCart } from '@molecula/ListProductCart'
import { OrderContainer } from '@containers/OrderContainer'

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