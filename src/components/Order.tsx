import React from 'react';
import {ILineItem} from '../interfaces/ILineItem';
import {IOrder} from '../interfaces/IOrder';
import LineItem from './LineItem';

interface OrderProps {
  order: IOrder
}

function Order({order}: OrderProps) {
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
  );
}

export default Order;
