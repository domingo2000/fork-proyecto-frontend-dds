import React, {useState} from 'react';
import Button from '../Buttons/Button';
import {ICategory} from '../../interfaces/ICategory';

import Product from '../Product';
import {IProduct} from '../../interfaces/IProduct';
import useFetchData from '../../services/useFetchData';
import {IBasicProps} from '../../interfaces/IBasicProps';

export interface CategoryProps extends IBasicProps {
  category: ICategory;
}

export interface CategoriesProps extends IBasicProps {
  categories: ICategory[];
}

export const Category: React.FC<CategoryProps> = ({children, category, className}) => (
  <div className={className || ''}>
    <h2>{category.name}</h2>
    {children}
  </div>
);

export const CategoryWithProducts: React.FC<CategoryProps> = (
    {children, category},
) => {
  const [products, setProducts] = useState<IProduct[]>(category.products);
  const {response} = useFetchData('/products');
  const [productId, setProductId] = useState(-1);

  const handleProductDelete = async (_productId: number) => {
    setProducts(products.filter((product) => product.id !== _productId));
  };

  const handleProductAdd = async () => {
    alert(`Product added ${productId}`);
  };

  const handleChangeSelectedProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductId(Number(event.target.value));
  };

  return (
    <div className="ui-search">
      <Category category={category}>
        {products.map((product) => (
          <div key={product.id} className="ui-search__item">
            <Product product={product}>
              <Button onClick={() => handleProductDelete(product.id)}> Delete </Button>
            </Product>
          </div>
        ))}
        <h3>Add product</h3>
        <select onChange={handleChangeSelectedProduct} defaultValue={response?.data[0].id}>
          {response?.data.map((product: IProduct) => (
            <option key={product.id} value={product.id}>{product.name} </option>
          ))}
        </select>
        <Button onClick={handleProductAdd}>Add</Button>
      </Category>
      {children}
    </div>
  );
};
