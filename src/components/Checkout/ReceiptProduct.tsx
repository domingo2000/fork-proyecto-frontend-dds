import React from 'react'

interface IProduct {
  id: number
  title: string
  price: number
  qty: number
  img: string
}

function ReceiptProduct({product}: {product: IProduct}) {
  return (
    <div className='receipt-product'>
      <div className='receipt-product-img'>
        <img src={product.img} alt={product.title}/>
      </div>
      <div className='receipt-product-info'>
        <div className='receipt-product-title'>
          <h3>{product.title}</h3>
        </div>
        <div className='receipt-product-qty'>
          <h3>x{product.qty}</h3>
        </div>
        <div className='receipt-product-price'>
          <h3>${product.price}.00</h3>
        </div>
      </div>
    </div>
  )
}

export default ReceiptProduct