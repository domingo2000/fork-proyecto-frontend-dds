import { Category } from "./category"
import { Image } from "./image"

export interface Product {
  id: number
  name: string
  description: string
  code: string
  price: number
  brand: string
  categories: Category[],
  images: Image[],
  created_at: string
  updated_at: string
}
