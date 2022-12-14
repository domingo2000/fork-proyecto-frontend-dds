import React from 'react';
import {emptyCart} from '../../utils/emptyCart';

const checkOut = () => {
  localStorage.setItem('cart', JSON.stringify(emptyCart));
  window.location.href = '/checkout-completed';
};

function DeliveryForm() {
  return (
    <div className='delivery-form'>
      <h1 className='title'>Where should we send your order?</h1>
      <div className='general-info'>
        <input placeholder='First Name'/>
        <input placeholder='Last Name'/>
        <input placeholder='Street Address'/>
        <div className='address-info'>
          <input placeholder='Zip code'/>
          <input placeholder='City'/>
        </div>
        <input placeholder='Country'/>
      </div>
      <h1 className='title'>Contact Information</h1>
      <div className='contact-info'>
        <input placeholder='Phone Number'/>
        <input placeholder='Email Address'/>
      </div>

      <div className='submit-button'>
        <button className='submit' onClick={() => checkOut()}>Submit</button>
      </div>
    </div>
  );
}

export default DeliveryForm;
