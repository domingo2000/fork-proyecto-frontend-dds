import {IMeta} from './IMeta';
import {IProduct} from './IProduct';

export interface ICategoryBody {
  name: string
  products: IProduct[]
}

export interface ICreateCategory {
  name: string
}

export interface ICategory extends ICategoryBody, IMeta {}
