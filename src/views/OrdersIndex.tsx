import React from 'react';
import Order from '../components/Order';
import useFetchData from '../services/useFetchData';
import {IOrder} from '../interfaces/IOrder';


function OrdersIndex() {
  const {
    response,
    loading,
  } = useFetchData('/orders');
  return (
    <div>
      <h1>Orders</h1>
      {loading && <p>Loading...</p>}
      {response && (
        <ul>
          {response.data.map((order: IOrder) => (
            <Order
              key={order.id}
              order={order}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrdersIndex;
