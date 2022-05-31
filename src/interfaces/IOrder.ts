import {ICoupon} from './ICoupon';
import {ILineItem} from './ILineItem';
import {IMeta} from './IMeta';

export interface IOrderBody {
  line_items: ILineItem[]
  iva: number
  discounts: number
  subtotal: number
  total: number
  coupons: ICoupon[]
}

export interface IOrder extends IOrderBody, IMeta {};
