import { LineItem } from './lineItem';

export interface Cart {
  id: number
  created_at: string
  updated_at: string
  total: number
  line_items: LineItem[]
}