import React from 'react';

function Register() {
  return (
    <div className='bg-home-gray'>
      <h1 className='text-4xl font-bold text-left ml-36 py-8'>Create your account.</h1>

      <div className='w-full flex flex-col items-center pt-24 pb-64'>
        <div className='flex flex-col w-1/5 justify-center'>
          <input className='bg-transparent w-full border-2 h-12 p-3 border-gray-300 rounded-lg my-1'
            type='email' placeholder='Email' />
          <input className='bg-transparent w-full border-2 h-12 p-3 border-gray-300 rounded-lg my-1'
            type='text' placeholder='Full Name' />
          <input className='bg-transparent w-full border-2 h-12 p-3 border-gray-300 rounded-lg my-1'
            type='text' placeholder='Nickname' />
          <input className='bg-transparent w-full border-2 h-12 p-3 border-gray-300 rounded-lg my-1'
            type='password' placeholder='Password' />
          <input className='bg-transparent w-full border-2 h-12 p-3 border-gray-300 rounded-lg my-1'
            type='password' placeholder='Confirm Password' />
        </div>

        <div className='flex justify-center m-4'>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
