import React from 'react';
import {ICoupon} from '../../interfaces/ICoupon';
import {capitalize} from '../../utils/helpers';

interface IProps {
  coupons: ICoupon[];
}

function HistoryOrderCoupons({coupons} : IProps) {
  return (
    <div>
      <h2 className='ml-8 text-lg'>Coupons Used</h2>
      { coupons.map((coupon: ICoupon) => (
        <div key={coupon.id}
          className='flex justify-between items-center px-2 h-10 mx-8 border-2 shadow-md border-gray-400 rounded-md'>
          <h3>{coupon.code}</h3>
          <h3>{capitalize(coupon.category.name)}</h3>
          <h3>-{coupon.discount * 100}%</h3>
        </div>
      ))}
    </div>
  );
}

export default HistoryOrderCoupons;
