import React from 'react'
import { useSelector } from 'react-redux'

export default function MoneyBar() {
  const budget = useSelector((state) => state.products.budget);
  return (
    <div className="money-bar">${Number(budget).toLocaleString('en-US')}</div>
  )
}
