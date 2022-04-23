import { LineItem } from "./lineItem";

export interface Order {
  id: number
  created_at: string
  updated_at: string
  line_items: LineItem[]
}