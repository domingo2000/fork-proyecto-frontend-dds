import React, {useEffect, useState} from 'react';
import APIRequester from '../../services/APIRequester';
import {AxiosResponse} from 'axios';
import {ICoupon} from '../../interfaces/ICoupon';

interface IProps {
  coupons: ICoupon[];
  setCoupons: (coupons: ICoupon[]) => void;
}

function AddCoupon({coupons, setCoupons}: IProps) {
  const [couponCode, setCouponCode] = useState('');
  const [response, setResponse] = useState<AxiosResponse>();
  const [buttonStatus, setButtonStatus] = useState('');

  const handleSubmit = async () => {
    setButtonStatus('Adding...');
    try {
      const response_ = await APIRequester.addCouponToUser(couponCode);
      setResponse(response_);
    } catch (e) {
      setButtonStatus('The coupon code is invalid.');
    }
  };

  useEffect(() => {
    if (response) {
      setButtonStatus('The coupon code was added correctly.');
      setCoupons(response.data.coupons);
    }
  }, [response]);

  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold my-6'>Add New Coupons</h1>

      <h1 className='pb-4'>{buttonStatus}</h1>
      <div className='bg-gray-300 h-20 w-full rounded-lg flex items-center p-2'>
        <input placeholder='Coupon Code' type='text' className='w-4/5 h-4/5 rounded-md p-4 text-lg'
          value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
        <button className='w-1/5 h-4/5 mx-2 rounded-md text-lg bg-blue-500 text-white' onClick={() => handleSubmit()}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCoupon;
