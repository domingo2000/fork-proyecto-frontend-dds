import React from 'react'
import { Category } from '../interfaces/category'
import { Product as IProduct } from '../interfaces/product'
import { LineItem as ILineItem} from '../interfaces/lineItem'
import { Order as IOrder } from '../interfaces/order'
import LineItem from './LineItem'

interface OrderProps {
  order: IOrder
}

function Order({ order }: OrderProps) {
  return (
    <div>
      <h2>Order #{order.id}</h2>
        {order.line_items.map((lineItem: ILineItem) => (
          <div>
            <hr />
            <LineItem key={lineItem.id} lineItem={lineItem} />
          </div>
        ))}
        <hr />
    </div>
  )
}

export default Order