import React from 'react'
import ImageBanner from '../../components/ProductCheckout/ImageBanner';
import ProductInfo from '../../components/ProductCheckout/ProductInfo';

function ProductCheckout() {

  return (
    <div className="product-checkout-main">
      <ProductInfo />
      <ImageBanner />
    </div>
  )
}

export default ProductCheckout;