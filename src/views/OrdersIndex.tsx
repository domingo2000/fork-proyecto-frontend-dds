import React from 'react'
import { Link } from 'react-router-dom'
import Order from '../components/Order'
import useFetchData from '../hooks/useFetchData'
import { LineItem as ILineItem} from '../interfaces/lineItem'
import { Order as IOrder } from '../interfaces/order'


function OrdersIndex() {
  const {
    data,
    loading,
  } = useFetchData('/orders')
  return (
    <div>
      <h1>Orders</h1>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((order: IOrder) => (
            <Order
              key={order.id}
              order={order}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrdersIndex