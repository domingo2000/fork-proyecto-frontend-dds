import { Product } from "./product"

export interface LineItem {
  id: number
  order_id: number,
  cart_id: number,
  amount: number
  disscount: number,
  created_at: string,
  updated_at: string,
  product: Product
}