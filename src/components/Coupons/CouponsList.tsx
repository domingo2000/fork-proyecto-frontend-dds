import React from 'react';
import {ICoupon} from '../../interfaces/ICoupon';
import CouponCard from './CouponCard';

interface IProps {
  inactiveCoupons: ICoupon[];
  activeCoupons: ICoupon[];
}

function CouponsList({activeCoupons, inactiveCoupons}: IProps) {
  return (
    <div className='w-full'>
      {activeCoupons !== [] && (
        <div className='w-full'>
          <h1 className='text-2xl font-bold text-left'>Active Coupons</h1>
          {activeCoupons.map((coupon: ICoupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      )}
      {inactiveCoupons && (
        <div className='w-full'>
          <h1 className='text-2xl font-bold text-left'>Expired Coupons</h1>
          {inactiveCoupons.map((coupon: ICoupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CouponsList;
