import React from 'react'

function Footer() {
  return (
    <div className='bg-home-gray mt-2 flex px-96 py-6'>
      <ul className='flex flex-col mx-20'>
        <p className='text-xl font-medium my-2'>Shop</p>
        <li className='leading-7'>Products</li>
        <li className='leading-7'>Categories</li>
        <li className='leading-7'>Computers</li>
        <li className='leading-7'>Screens</li>
      </ul>
      <ul className='flex flex-col'>
        <p className='text-xl font-medium my-2'>My Account</p>
        <li className='leading-7'>My Profile</li>
        <li className='leading-7'>My Orders</li>
        <li className='leading-7'>My Wishlist</li>
        <li className='leading-7'>My Cart</li>
      </ul>
    </div>
  )
}

export default Footer