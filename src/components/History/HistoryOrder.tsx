import React, {useState} from 'react';
import {IOrder} from '../../interfaces/IOrder';
import HistoryProducts from './HistoryProducts';
import HistoryOrderTotal from './HistoryOrderTotal';
import HistoryOrderCoupons from './HistoryOrderCoupons';
import HistoryHeader from './HistoryHeader';

interface OrderProps {
  order: IOrder
}

function Order({order}: OrderProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className='flex flex-col my-1'>
      <div className={`flex flex-col bg-gray-300 rounded-lg ${open ? 'pb-4 h-auto' : 'h-10'}`}>
        <HistoryHeader order={order} open={open} setOpen={setOpen}/>
        { open && (
          <div>
            <HistoryProducts order={order}/>
            <HistoryOrderCoupons coupons={order.coupons}/>
            <HistoryOrderTotal order={order}/>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
