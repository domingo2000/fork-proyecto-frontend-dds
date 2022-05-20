import axios from 'axios';
import {ICategory} from '../interfaces/ICategory';
import {IProduct} from '../interfaces/IProduct';

class APIRequester {
  static axios = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  static get(url: string, params?: any) {
    return APIRequester.axios.get(url, {params});
  }

  static post(url: string, data?: any) {
    return APIRequester.axios.post(url, data);
  }

  static put(url: string, data?: any) {
    return APIRequester.axios.put(url, data);
  }

  static delete(url: string, data?: any) {
    return APIRequester.axios.delete(url, {data});
  }

  static createProduct(product: IProduct) {
    return APIRequester.axios.post('/products', product);
  }

  static createCategory(category: ICategory) {
    return APIRequester.axios.post('/categories', category);
  }

  static editProduct(id: number, product : IProduct) {
    return APIRequester.axios.put(`/categories/${id}`, product);
  }

  static editCategory(id: number, category : ICategory) {
    return APIRequester.axios.put(`/categories/${id}`, category);
  }

  static deleteProduct(id: number) {
    return APIRequester.axios.delete(`/products/${id}`);
  }

  static deleteCategory(id: number) {
    return APIRequester.axios.delete(`/categories/${id}`);
  }
}

export default APIRequester;
