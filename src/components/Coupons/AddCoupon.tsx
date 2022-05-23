import React from 'react';

function AddCoupon() {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold my-6'>Add New Coupons</h1>
      <div className='bg-gray-300 h-20 w-full rounded-lg flex items-center p-2'>
        <input placeholder='Coupon Code' type='text' className='w-4/5 h-4/5 rounded-md p-4 text-lg'/>
        <button className='w-1/5 h-4/5 mx-2 rounded-md text-lg bg-blue-500 text-white'>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCoupon;
