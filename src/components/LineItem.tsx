import React from 'react'
import { LineItem as ILineItem } from '../interfaces/lineItem'

interface LineItemProps {
  lineItem: ILineItem
}

function LineItem({ lineItem }: LineItemProps) {
  return (
    <div>
      <div>{lineItem.product.name}</div>
      <div>Amount: {lineItem.amount}</div>
      <div>Disscount: {lineItem.disscount}</div>
    </div>
  )
}

export default LineItem