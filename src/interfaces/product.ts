import { Category } from "./category"

export interface Product {
  id: number
  name: string
  code: string
  price: number
  brand: string
  categories: Category[],
  created_at: string
  updated_at: string
}
