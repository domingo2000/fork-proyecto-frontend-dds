import axios from 'axios';
import { ICategory } from '../interfaces/ICategory';
import { IProduct } from '../interfaces/IProduct';

class API {
  static axios = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  static get(url: string, params?: any) {
    return API.axios.get(url, { params });
  }

  static post(url: string, data?: any) {
    return API.axios.post(url, data);
  }

  static put(url: string, data?: any) {
    return API.axios.put(url, data);
  }

  static delete(url: string, data?: any) {
    return API.axios.delete(url, { data });
  }

  static getProducts() {
    return API.axios.get('/products');
  }

  static getCategories() {
    return API.axios.get('/categories');
  }

  static getProduct(id: number) {
    return API.axios.get(`/products/${id}`);
  }

  static getCategory(id: number) {
    return API.axios.get(`/categories/${id}`);
  }

  static createProduct(product: IProduct) {
    return API.axios.post('/products', product);
  }

  static createCategory(category: ICategory) {
    return API.axios.post('/categories', category);
  }

  static editProduct(id: number, product : IProduct) {
    return API.axios.put(`/categories/${id}`, product);
  }

  static editCategory(id: number, category : ICategory) {
    return API.axios.put(`/categories/${id}`, category);
  }

  static deleteProduct(id: number) {
    return API.axios.delete(`/products/${id}`);
  }

  static deleteCategory(id: number) {
    return API.axios.delete(`/categories/${id}`);
  }
}

export default API;
