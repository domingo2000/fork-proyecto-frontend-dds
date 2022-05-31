import {IMeta} from './IMeta';
import {ICategory} from './ICategory';

interface Coupon {
  category: ICategory
  code: string
  active: boolean
  redeemed: boolean
  discount: number
  expiry_date: string
}


export interface ICreateCoupon {
  code: string
  discount: number
  redeemed: boolean
  active: boolean
  expiry_date: string
  category_id: number
}

export interface ICoupon extends Coupon, IMeta {}
