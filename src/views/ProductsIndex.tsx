import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IProduct } from '../interfaces/IProduct';

import FilterBar from '../components/Filter/FilterBar';
import { FilterItem } from '../components/Filter/FilterItem/FilterItem';
import UiSearch from '../components/UiSearch';
import Product from '../components/Product';
import { ICategory } from '../interfaces/ICategory';

function setsDifference(setA: Set<string>, setB: Set<string>) {
  const difference = new Set(setA);
  for (const elem of Array.from(setB)) {
    difference.delete(elem);
  }
  return difference;
};

function ProductsIndex() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [renderedProducts, setRenderedProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProducts = await axios.get('http://localhost:3001/products');
        const responseCategories = await axios.get('http://localhost:3001/categories');
        setProducts(responseProducts.data);
        setCategories(responseCategories.data);
        setRenderedProducts(responseProducts.data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (filters: Set<string>) => {
    const shouldFilter = !(filters.size === 0);
    if (shouldFilter) {
      const filteredProducts = products.filter((product) => {
        const productCategories = new Set(product.categories.map((category) => category.name));
        if (!(setsDifference(filters, productCategories).size === 0)) {
          return false;
        }
        return true;
      });

      setRenderedProducts(filteredProducts);
    } else {
      setRenderedProducts(products);
    }
  };

  return (
    <div className="product-index">
      <h1 className="product-index__header">Products</h1>
      { loading ? <div>Loading...</div> : null }
      {error && <p>Error :(</p>}
      <div className="product-index__layout">
        <div className="product-index__layout__item-left">
          <FilterBar onFiltersChange={handleFilterChange}>
            {categories.map((category) => (
              <FilterItem _key={category.name} />
            ))}
          </FilterBar>
        </div>
        <div className="product-index__layout__item-right">
          <UiSearch>
            {renderedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </UiSearch>
        </div>
      </div>
    </div>
  );
}

export default ProductsIndex;
