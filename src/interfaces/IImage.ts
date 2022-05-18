import { IMeta } from './IMeta';

interface Image {
  url: string
  product_id: number
}

export interface IImage extends Image, IMeta {}