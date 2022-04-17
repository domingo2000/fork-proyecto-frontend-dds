import { LineItem } from './lineItem';

export interface Cart {
  id: number
  created_at: string
  updated_at: string
  line_items: LineItem[]
}