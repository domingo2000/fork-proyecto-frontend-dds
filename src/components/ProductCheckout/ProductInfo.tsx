import React from 'react';
import {IProduct} from '../../interfaces/IProduct';
import {ILineItem} from '../../interfaces/ILineItem';
import {emptyCart} from '../../utils/emptyCart';

const addToBag = (product: IProduct) => {
  const cart = JSON.parse(localStorage.getItem('cart') as string);
  let wasInCart = false;
  const line_items = cart.line_items.map((item: ILineItem) => {
    if (item.product.id === product.id) {
      item.amount += 1;
      wasInCart = true;
    }
    return item;
  });
  if (!wasInCart) {
    line_items.push({
      product,
      amount: 1,
    });
  }
  cart.line_items = line_items;
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = '/bag';
};

function ProductInfo({product}: {product: IProduct}) {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify(emptyCart));
  }
  return (
    <div className='product-info'>
      <div className='product-info-title' id='desktop-title'>
        <h1>{product.name}</h1>
      </div>
      <div className='product-info-price'>
        ${product.price}.00
      </div>
      <div className='product-info-description'>
        {product.description}
      </div>

      <button onClick={() => addToBag(product)} className='submit-button'>Add to Bag</button>
    </div>
  );
}

export default ProductInfo;
