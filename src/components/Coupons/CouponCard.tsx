import React, {useState, useEffect} from 'react';
import {ICoupon} from '../../interfaces/ICoupon';
import {capitalize} from '../../utils/helpers';

interface IProps {
  coupon: ICoupon
}

function CouponCard({coupon}: IProps) {
  const [couponStatus, setCouponStatus] = useState<string>('loading');

  useEffect(() => {
    if (coupon.redeemed) {
      setCouponStatus('redeemed');
    } else if (!coupon.active) {
      setCouponStatus('expired');
    } else {
      setCouponStatus('active');
    }
  }, [coupon]);

  const statusBadgeStyles: Record<string, string> = {
    'active': 'bg-green-500 text-white',
    'expired': 'bg-red-500 text-white',
    'redeemed': 'bg-gray-500 text-white',
    'loading': '',
  };

  return (
    <div className='rounded-md bg-gray-300 px-4 py-2 my-2 flex justify-between items-center'>
      <h1 className='w-32 text-left'>{capitalize(coupon.category.name)}</h1>
      <h1 className='w-40 text-left'>{coupon.code}</h1>

      {
        couponStatus === 'active' ? (
          <h1>Expiration: {coupon.expiry_date.slice(0, 10)}</h1>
        ) : null
      }

      <span className={`rounded-md px-2 py-1 w-24 text-center ${statusBadgeStyles[couponStatus]}`}>
        {capitalize(couponStatus)}
      </span>
    </div>
  );
}

export default CouponCard;
