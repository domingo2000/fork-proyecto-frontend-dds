import React from 'react';
import {IOrder} from '../../interfaces/IOrder';

interface IProps {
  order: IOrder;
}

function HistoryOrderTotal({order}: IProps) {
  return (
    <div className='flex justify-end mr-10 py-2 pt-6'>
      {
        <table className='w-1/4'>
          <tbody>
            <tr>
              <td className='key'>
                <h3>Subtotal</h3>
              </td>
              <td className='flex justify-end'>
                <h3>${order.subtotal}</h3>
              </td>
            </tr>
            <tr>
              <td className='key'>
                <h3>Discounts</h3>
              </td>
              <td className='flex justify-end'>
                <h3>${order.discounts}</h3>
              </td>
            </tr>
            <tr>
              <td className='key'>
                <h3>Taxes</h3>
              </td>
              <td className='flex justify-end'>
                <h3>${order.iva}</h3>
              </td>
            </tr>
            <tr>
              <td className='key'>
                <h3>Total</h3>
              </td>
              <td className='flex justify-end'>
                <h3>${order.total}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

export default HistoryOrderTotal;
