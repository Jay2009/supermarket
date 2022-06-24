import React from "react"

interface items {
  name: string
  price: number
}

const ShopItem = ({ name, price }: items) => {
  return (
    <div className='ShopItem'>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  )
}

export default ShopItem
