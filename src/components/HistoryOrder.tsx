import React from 'react';
import {ILineItem} from '../interfaces/ILineItem';
import {IOrder} from '../interfaces/IOrder';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

interface OrderProps {
  order: IOrder
}

function Order({order}: OrderProps) {
  const [open, setOpen] = React.useState(false); //eslint-disable-line

  return (
    <section className='flex flex-col my-1'>
      <div className={`flex flex-col bg-gray-300 rounded-lg ${open ? 'h-96' : 'h-10'}`}>
        <div className='px-4 w-full h-10 flex items-center justify-between'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={open ? faXmark : faBars} className='cursor-pointer' onClick={() => setOpen(!open)}/>
            <h2 className='px-2'>Order #{order.id}</h2>
          </div>
          <h2 className='px-4'>{order.created_at.slice(0, 10)}</h2>
        </div>
        <div className='products px-8'>
          { open ? order.line_items.map((lineItem: ILineItem) => (
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
          )) : null }
        </div>
        {open ? <div className='flex justify-end mr-10'>
          <table className='w-1/4'>
            <tbody>
              <tr>
                <td className='key'>
                  <h3>Subtotal</h3>
                </td>
                <td className='flex justify-end'>
                  <h3>{order.total}.00</h3>
                </td>
              </tr>
              <tr>
                <td className='key'>
                  <h3>Taxes</h3>
                </td>
                <td className='flex justify-end'>
                  <h3>{Math.round(order.total * 0.19 * 100) / 100}</h3>
                </td>
              </tr>
              <tr>
                <td className='key'>
                  <h3>Total</h3>
                </td>
                <td className='flex justify-end'>
                  <h3>${Math.round(order.total * 1.19 * 100) / 100}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div> : null }
      </div>
    </section>
  );
}

export default Order;
