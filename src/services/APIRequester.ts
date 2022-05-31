import axios from 'axios';
import {ICategory, ICreateCategory} from '../interfaces/ICategory';
import {IProduct, ICreateProduct} from '../interfaces/IProduct';
import {ICreateCoupon} from '../interfaces/ICoupon';
import config from '../config/config';

class APIRequester {
  static axios = axios.create({
    baseURL: config.API_URL,
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

  static createProduct(product: ICreateProduct) {
    return APIRequester.axios.post('/products', product);
  }

  static createCategory(category: ICreateCategory) {
    return APIRequester.axios.post('/categories', category);
  }

  static createCoupon(coupon: ICreateCoupon) {
    return APIRequester.axios.post('/coupons', coupon);
  }

  static async addCouponToUser(couponCode: string) {
    return await APIRequester.axios.post('/users/1/coupons', {coupon_code: couponCode});
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
