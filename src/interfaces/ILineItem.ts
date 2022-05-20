import {IMeta} from './IMeta';
import {IProduct} from './IProduct';

export interface ILineItemBody {
  order_id: number,
  cart_id: number,
  amount: number
  discount: number,
  product: IProduct
}

export interface ILineItem extends ILineItemBody, IMeta {}
