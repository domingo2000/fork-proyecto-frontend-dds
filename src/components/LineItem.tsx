import React from 'react';
import {ILineItem} from '../interfaces/ILineItem';

interface LineItemProps {
  lineItem: ILineItem
}

function LineItem({lineItem}: LineItemProps) {
  return (
    <div>
      <div>{lineItem.product.name}</div>
      <div>Amount: {lineItem.amount}</div>
      <div>Disscount: {lineItem.discount}</div>
    </div>
  );
}

export default LineItem;
