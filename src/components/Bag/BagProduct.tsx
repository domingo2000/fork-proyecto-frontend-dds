import React, { useState } from 'react'
import { ILineItem } from '../../interfaces/ILineItem';

function BagProduct({item, changeProductAmount, deleteProduct}: {item: ILineItem, changeProductAmount: (productId: number, amount: number) => void, deleteProduct: (id: number) => void}) {
  const [productQty, setProductQty] = useState(item.amount)

  return (
    <div className='bag-product'>
      <div className='bag-product-image'>
        <img src={item.product.images[0].url} alt={item.product.name}/>
      </div>
      <div id='mobile-product-title'>
        <h1>{item.product.name}</h1>
      </div>
      <div className='bag-product-info'>
        <div className="bag-product-title">
          <h1>{item.product.name}</h1>
        </div>
        <div className="product-qty">
          <button onClick={() => {
              if (productQty - 1 < 1) { return }
              setProductQty(productQty - 1);
              changeProductAmount(item.product.id, -1);
            }
          }>-</button>
          <h1>{productQty}</h1>
          <button onClick={() => {
              setProductQty(productQty + 1);
              changeProductAmount(item.product.id, +1);
            }
          }>+</button>
        </div>
        <div className='end'>
          <h1>${item.product.price * productQty}.00</h1>
          <button onClick={() => deleteProduct(item.product.id)}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default BagProduct