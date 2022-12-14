import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Admin({childComponent, showNavBar=true}:
  {childComponent: (resource:string) => JSX.Element, showNavBar?: boolean}) {
  const [resource, setResource] = useState('users');

  return (
    <div className='min-h-[80vh] px-64'>
      <h1 className='text-2xl font-bold my-6'>Admin</h1>
      {showNavBar &&
        <ul className='flex'>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mr-1'
            onClick={() => setResource('users')}>Users
          </li>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mx-1'
            onClick={() => setResource('coupons')}>Coupons
          </li>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mx-1'
            onClick={() => setResource('orders')}>Orders
          </li>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mx-1'
            onClick={() => setResource('products')}>Products
          </li>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mx-1'
            onClick={() => setResource('categories')}>Categories
          </li>
          <li className='cursor-pointer p-2 border-2 border-blue-200 rounded-md mx-1'>
            <Link to='/admin/product-categories' className='text-black'>
              Product Categories
            </Link>
          </li>
        </ul>
      }
      {childComponent(resource)}
    </div>
  );
}

export default Admin;
