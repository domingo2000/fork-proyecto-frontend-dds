import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex justify-between h-12 bg-[#313132] text-white'>
      <ul className='flex items-center pl-32'>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/">Home</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/products">Products</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <ul className='flex items-center pr-32'>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/bag">Bag</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/history">My Orders</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/coupons">Coupons</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/signin"
          >Sign In</Link>
        </li>
        <li className='mx-2 text-lg hover:ring-2 p-1 rounded-md ring-gray-300'>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
