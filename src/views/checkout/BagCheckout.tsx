import React, { useState, useEffect, useRef } from 'react'
import DeliveryForm from '../../components/Checkout/DeliveryForm';
import PickUpForm from '../../components/Checkout/PickUpForm';
import { ICart } from '../../interfaces/ICart';

function BagCheckout() {
  const [shippingMethod, setShippingMethod] = useState('delivery');
  const deliveryBox = useRef<HTMLButtonElement>(document.createElement('button'));
  const pickupBox = useRef<HTMLButtonElement>(document.createElement('button'));
  const [cart] = useState<ICart>(JSON.parse(localStorage.getItem('cart') as string));
  const total = cart.line_items.reduce((acc, item) => acc + item.product.price * item.amount, 0);

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
        <h4> Order Summary: ${total*1.19} </h4>
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