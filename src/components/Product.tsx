import React from 'react';
import { ICategory } from '../interfaces/ICategory';
import { IProduct } from '../interfaces/IProduct';

interface ProductRawProps {
  product: IProduct | IProduct;
}

export const ProductRaw: React.FC<ProductRawProps> = ({ product, children }) => {
  return (
    <div className="ui-search-result">
      <div className="ui-search-result__image">
        <span className="ui-search-result__brand">
          {product.brand}
        </span>
        <img src={product.images[0].url} alt="" />
      </div>
      {children}
    </div>
  );
};
interface ProductProps {
  product: IProduct;
  children?: React.ReactNode;
}

function ProductDescription({ product, children }: ProductProps) {
  return (
    <div className="ui-search-result__content">
      <h2 className="ui-search-result__content__name">
        {product.name}
      </h2>
      <span className="ui-search-result__content__price">
        $
        {' '}
        {product.price}
      </span>
      <div className="ui-search-result__content__categories">
        {product.categories.map((category: ICategory) => (
          <span className="ui-search-result__content__categories__category" key={category.id}>
            {category.name}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

function Product({ product, children }: ProductProps) {
  return (
    <ProductRaw product={product}>
      <ProductDescription product={product} />
      {children}
    </ProductRaw>
  );
}

export default Product;
