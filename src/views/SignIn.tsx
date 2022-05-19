import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const inputBaseClasses = 'bg-transparent w-full border-2 h-12 p-3 border-gray-300';

  return (
    <div className='min-h-fit bg-home-gray'>
      <h1 className='text-4xl font-bold text-left ml-36 py-8'>Sign in for faster checkout.</h1>

      <div className='w-full flex justify-center pt-24 pb-96'>
        <div className='flex flex-col w-1/5 justify-center'>
          <p className='text-2xl font-medium py-2 text-center'>Sign in to your account</p>

          <div className='w-full flex relative items-center'>
            <input className={ `bg-transparent w-full border-2 h-12 p-3 border-gray-300 ${emailSubmitted ? 
            'border-b-0 rounded-t-lg'
            : 'rounded-lg'}
            `} type='text' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <FontAwesomeIcon className={emailSubmitted ? 'hidden' : 'absolute w-6 h-6 right-4 cursor-pointer'} icon={faCircleArrowRight} onClick={() => setEmailSubmitted(true)}/>
          </div>

          <div className={emailSubmitted ? 'w-full flex relative items-center' : 'hidden'}>
            <input className={`${inputBaseClasses} rounded-b-lg`} type='password' placeholder='Password' 
              value={password} onChange={(event) => setPassword(event.target.value)} />
              
            <FontAwesomeIcon className='absolute w-6 h-6 right-4 cursor-pointer' icon={faCircleArrowRight} />
          </div>
          
          <div className='flex justify-center'>
            <div className='flex items-center justify-center mt-4 border-b-2 w-2/3'>
              <input className='bg-transparent border-2 border-gray-300 rounded-l-lg h-12 p-3' type='checkbox'></input>
              <p className='text-md px-3 font-medium text-gray-600'>Remember me</p>
            </div>
          </div>
          <p className='text-sm text-center p-2'>Forgot Password?</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn