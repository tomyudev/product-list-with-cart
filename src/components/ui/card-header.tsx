import React from 'react'
type CardHeaderProps = {
  category: string
  name: string
  price: number
}

export default function CardHeader({ category, name, price }: CardHeaderProps) {
  return (
    <div className="mt-8">
      <p className="text-(--light-text) text-sm">{category}</p>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}
