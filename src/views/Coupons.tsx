import React, {useState, useEffect} from 'react';
import {ICoupon} from '../interfaces/ICoupon';
import useFetchData from '../services/useFetchData';
import AddCoupon from '../components/Coupons/AddCoupon';
import CouponsList from '../components/Coupons/CouponsList';

function Coupons() {
  const [activeCoupons, setActiveCoupons] = useState<ICoupon[]>([]);
  const [coupons, setCoupons] = useState<ICoupon[]>([]);

  const {
    response,
    loading,
  } = useFetchData('/users/1');

  useEffect(() => {
    if (response) {
      setActiveCoupons(response.data.coupons.filter((coupon: ICoupon) => coupon.active && !coupon.redeemed));
      setCoupons(response.data.coupons.filter((coupon: ICoupon) => !coupon.active || coupon.redeemed));
    }
  }, [response]);

  return (
    <div className='min-h-[80vh] flex flex-col items-start px-64 py-4 bg-home-gray'>
      <h1 className='text-3xl font-bold my-6'>My Coupons</h1>

      {loading && <p>Loading...</p>}
      <CouponsList activeCoupons={activeCoupons} inactiveCoupons={coupons}/>
      <AddCoupon/>
    </div>
  );
}

export default Coupons;
