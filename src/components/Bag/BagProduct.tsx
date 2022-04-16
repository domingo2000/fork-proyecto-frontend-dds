import React, { useState } from 'react'

interface IProduct {
  id: number
  title: string
  price: number
  qty: number
  img: string
}

function BagProduct({product, changeProductAmount, deleteProduct}: {product: IProduct, changeProductAmount: (productId: number, amount: number) => void, deleteProduct: (id: number) => void}) {
  const [productQty, setProductQty] = useState(product.qty)

  return (
    <div className='bag-product'>
      <div className='bag-product-image'>
        <img src={product.img} alt={product.title}/>
      </div>
      <div className='bag-product-info'>
        <div className="bag-product-title">
          <h1>{product.title}</h1>
        </div>
        <div className="product-qty">
          <button onClick={() => {
              if (productQty - 1 < 1) { return }
              setProductQty(productQty - 1);
              changeProductAmount(product.id, -1);
            }
          }>-</button>
          <h1>{productQty}</h1>
          <button onClick={() => {
              setProductQty(productQty + 1);
              changeProductAmount(product.id, +1);
            }
          }>+</button>
        </div>
        <div className='end'>
          <h1>${product.price * productQty}.00</h1>
          <button onClick={() => deleteProduct(product.id)}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default BagProduct