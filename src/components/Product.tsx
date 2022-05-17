import React from 'react'
import { ICategory } from '../interfaces/ICategory'
import { IProduct } from '../interfaces/IProduct'
import { Link } from 'react-router-dom';

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
        <li>Categories: {product.categories.map((category: ICategory) => category.name).join(', ')}</li>
        <Link to={`/products/${product.id}/checkout`}>Buy</Link>
      </ul>
    </div>
  )
}

export default Product