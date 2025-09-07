import React from 'react'
import CardHeader from './card-header'
import Image from 'next/image'
import AtcButton from './atc-button'

type CardProps = {
  category: string
  name: string
  price: number
  image: string
}

export default function Card({ category, name, price, image }: CardProps) {
  return (
    <div className="bg-transparent cursor-pointer group">
      <div className="relative">
        <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-lg group-hover:border-solid group-hover:border-2 group-hover:border-[#b62a0d] group-hover:duration-200 group-hover:ease-in-out "
      />
      <AtcButton />
      </div>
      
      <CardHeader category={category} name={name} price={price} />
      
    </div>
  )
}
