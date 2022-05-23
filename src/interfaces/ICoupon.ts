import {IMeta} from './IMeta';
import {ICategory} from './ICategory';

interface Coupon {
  category: ICategory
  code: string
  active: boolean
  redeemed: boolean
  discount: number
  expiryDate: string
}

export interface ICoupon extends Coupon, IMeta {}
