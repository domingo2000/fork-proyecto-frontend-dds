import React from 'react';
import {ICategory} from '../interfaces/ICategory';
import {IProduct} from '../interfaces/IProduct';

interface ProductRawProps {
  product: IProduct | IProduct;
}

export const ProductRaw: React.FC<ProductRawProps> = ({product, children}) => {
  return (
    <div className="flex w-full h-44">
      <div className="">
        <img className='object-contain h-full w-40' src={product.image_url} alt="" />
      </div>
      {children}
    </div>
  );
};
interface ProductProps {
  product: IProduct;
  children?: React.ReactNode;
}

function ProductDescription({product, children}: ProductProps) {
  return (
    <div className="ui-search-result__content">
      <div className="flex mb-3 items-center">
        {/* <span className="mr-3 bg-slate-600 text-white px-2 py-1 rounded-md">
          {product.brand}
        </span> */}
        <h2 className='text-xl font-medium'>{product.name}</h2>
      </div>
      <span className="ui-search-result__content__price">
        <h2 className='text-lg'>{`$ ${product.price}`}</h2>
      </span>
      <div className="ui-search-result__content__categories">
        {product.categories.map((category: ICategory) => (
          <span className="bg-blue-500 p-1 mx-1 rounded-md text-white" key={category.id}>
            {category.name}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

function Product({product, children}: ProductProps) {
  return (
    <ProductRaw product={product}>
      <ProductDescription product={product} />
      {children}
    </ProductRaw>
  );
}

export default Product;
