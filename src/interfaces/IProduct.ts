import {ICategory} from './ICategory';
import {IImage} from './IImage';
import {IMeta} from './IMeta';

interface Product {
  name: string
  subtitle: string
  description: string
  code: string
  price: number
  brand: string
  image_url: string
  categories: ICategory[],
  images: IImage[],
}

export interface ICreateProduct {
  name: string
  subtitle: string
  description: string
  code: string
  price: number
  brand: string
  image_url: string
}

export interface IProduct extends Product, IMeta {}
