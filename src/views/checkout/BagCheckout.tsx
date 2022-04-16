import React, { useState, useEffect, useRef } from 'react'
import DeliveryForm from '../../components/Checkout/DeliveryForm';
import PickUpForm from '../../components/Checkout/PickUpForm';

function BagCheckout() {
  const [shippingMethod, setShippingMethod] = useState('delivery');
  const deliveryBox = useRef<HTMLButtonElement>(document.createElement('button'));
  const pickupBox = useRef<HTMLButtonElement>(document.createElement('button'));

  useEffect(() => {
    if (shippingMethod === 'delivery') {
      deliveryBox.current.classList.add('active');
      pickupBox.current.classList.remove('active');
    } else if (shippingMethod === 'pickup') {
      deliveryBox.current.classList.remove('active');
      pickupBox.current.classList.add('active');
    }
  }, [shippingMethod]);


  return (
    <div className='bag-checkout'>
      <div className='bag-checkout-order-summary'>
        <h3> Checkout </h3>
        <h4> Order Summary: $197.00 </h4>
      </div>
      <div className='bag-checkout-shipping-method'>
        <h1 className='title'>How would you like to get your order?</h1>
        <div className='shipping-method-selector'>
          <button className='box left active' onClick={() => setShippingMethod('delivery')} ref={deliveryBox}>
            <img src='/images/delivery-box.png' alt='delivery box' />
            <p>Shipping</p>
          </button>
          <button className='box right' onClick={() => setShippingMethod('pickup')} ref={pickupBox}>
            <img src='/images/pickup.png' alt='shopping bag' />
            <p>Pickup</p>
          </button>
        </div>
      </div>
      {shippingMethod === 'delivery' && <DeliveryForm />}
      {shippingMethod === 'pickup' && <PickUpForm />}
    </div>
  )
}

export default BagCheckout