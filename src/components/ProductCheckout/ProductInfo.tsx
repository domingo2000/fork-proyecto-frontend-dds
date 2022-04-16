import React from 'react'

function ProductInfo() {
  return (
    <div className='product-info'>
      <div className='product-info-title'>
        <h1>Product Info</h1>
      </div>
      <div className='product-info-price'>
        $179.00
      </div>
      <div className='product-info-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius, qui excepturi nobis, temporibus nostrum odio totam porro assumenda, debitis eveniet! Est, optio omnis delectus libero eius quo commodi modi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, optio quaerat ex inventore nostrum eius distinctio laboriosam dolor mollitia accusantium, placeat qui, tempora aut hic. Sint doloremque reprehenderit perferendis temporibus.
      </div>

      <button>Add to Bag</button>
    </div>
  )
}

export default ProductInfo