import React from 'react';
import {IOrder} from '../../interfaces/IOrder';
import {ILineItem} from '../../interfaces/ILineItem';

interface IProps {
  order: IOrder;
}

function HistoryProducts({order}: IProps) {
  return (
    <div className='products px-8'>
      { order.line_items.map((lineItem: ILineItem) => (
        <div key={lineItem.id} className='flex h-28 w-full my-3 p-2 rounded-md shadow-lg'>
          <div className=''>
            <img className='w-28 h-full object-contain drop-shadow-md'
              src={lineItem.product.images[0].url} alt={lineItem.product.name}/>
          </div>
          <div className='receipt-product-info'>
            <div className='receipt-product-title'>
              <h3>{lineItem.product.name}</h3>
            </div>
            <div className='receipt-product-qty'>
              <h3>x{lineItem.amount}</h3>
            </div>
            <div className='receipt-product-price'>
              <h3>${lineItem.product.price * lineItem.amount}.00</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryProducts;
