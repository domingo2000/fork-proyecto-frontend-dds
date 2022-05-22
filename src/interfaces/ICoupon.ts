import {IMeta} from './IMeta';
import {ICategory} from './ICategory';

interface Coupon {
  category: ICategory
  code: string
  active: boolean
  expiryDate: Date
}

export interface ICoupon extends Coupon, IMeta {}
