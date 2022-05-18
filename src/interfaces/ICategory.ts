import { IMeta } from './IMeta';
import { IProduct } from './IProduct';

export interface ICategoryBody {
  name: string
  description: string
  products: IProduct[]
}

export interface ICategory extends ICategoryBody, IMeta {}
