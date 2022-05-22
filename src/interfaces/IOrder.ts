import {ICoupon} from './ICoupon';
import {ILineItem} from './ILineItem';
import {IMeta} from './IMeta';

export interface IOrderBody {
  line_items: ILineItem[]
  total: number
  coupons: ICoupon[]
  discounts: number
}

export interface IOrder extends IOrderBody, IMeta {};
