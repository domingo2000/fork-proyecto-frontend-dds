import { ILineItem } from './ILineItem';
import { IMeta } from './IMeta';

export interface IOrderBody {
  line_items: ILineItem[]
}

export interface IOrder extends IOrderBody, IMeta {}
