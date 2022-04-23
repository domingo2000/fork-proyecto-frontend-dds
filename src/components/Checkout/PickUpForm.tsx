import React, { useState, useRef, useEffect } from 'react'
import LocalPickUpCard from './LocalPickUpCard'
import { emptyCart } from '../../utils/emptyCart';

const checkOut = () => {
  localStorage.setItem('cart', JSON.stringify(emptyCart));
  window.location.href = '/checkout-completed';
}

const locals = [
  {
    id: 0,
    name: 'La Dehesa',
    address: 'Calle de la Dehesa, 1, 28001 Madrid, Spain',
  },
  {
    id: 1,
    name: 'Las Condes',
    address: 'Calle Las Condes, 1, 28001 Madrid, Spain',
  },
  {
    id: 2,
    name: 'La Reina',
    address: 'Calle de la Reina, 1, 28001 Madrid, Spain',
  },
]

function PickUpForm() {
  const [selectedLocalId, setSelectedLocalId] = useState(0);
  const localsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (localsRef.current[selectedLocalId]) {
      localsRef.current.forEach(el => el.classList.remove('active'));
      localsRef.current[selectedLocalId].classList.add('active');
    }
  }, [selectedLocalId]);
  
  return (
    <div className='pickup-form'>
      <h1 className='title'>Where would you like to pick up your order?</h1>

      <div className='pickup-locals'>
        {locals.map(local => (
          <LocalPickUpCard key={local.id} local={local} setSelectedLocalId={setSelectedLocalId} localsRef={localsRef}/>
        ))}
      </div>

      <h1 className='title'>Contact Information</h1>
      <div className='contact-info'>
        <input placeholder='First Name'/>
        <input placeholder='Last Name'/>
        <input placeholder='Phone Number'/>
        <input placeholder='Email Address'/>
      </div>

      <div className='submit-button'>
        <button className='submit' onClick={() => checkOut()}>Submit</button>
      </div>
    </div>
  )
}

export default PickUpForm