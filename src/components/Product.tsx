import React from 'react'
import { Category } from '../interfaces/category'
import { Product as IProduct } from '../interfaces/product'

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <ul>
        <li>Code: {product.code}</li>
        <li>Price: {product.price}</li>
        <li>Brand: {product.brand}</li>
        <li>Categories: {product.categories.map((category: Category) => category.name).join(', ')}</li>
      </ul>
    </div>
  )
}

export default Product