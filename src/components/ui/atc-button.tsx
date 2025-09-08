import React from 'react'
import Image from 'next/image'

const AtcButton = () => {

  const atcButtonClasses = `
    w-36 
    px-3 
    py-2 
    bg-(--background) 
    text-(--foreground) 
    rounded-full 
    border-solid 
    border-2 
    border-[#C3B4AE] 
    flex 
    items-center 
    justify-center 
    gap-2  
    hover:duration-200 
    hover:ease-in-out 
    absolute 
    -bottom-5 
    right-13 
    z-10 
    cursor-pointer
    `

  return (
    <button className={atcButtonClasses}>
      <Image src="/assets/images/icon-add-to-cart.svg" alt="shopping cart icon" width={18} height={18} />
      <span className="text-xs">Add to Cart</span>
    </button>
  )
}

export default AtcButton
