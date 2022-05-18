import { ILineItem } from './ILineItem';
import { IMeta } from './IMeta';

interface Cart {
  total: number
  line_items: ILineItem[]
}

export interface ICart extends Cart, IMeta {}