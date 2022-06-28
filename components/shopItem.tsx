import React from "react"

interface items {
  name: string
  price: number
  onPut: (name: string, price: number) => void
}

const ShopItem = ({ name, price, onPut }: items) => {
  return (
    <div
      onClick={() => onPut(name, price)}
      className='my-5 cursor-pointer rounded-xl border border-solid border-sky-200 bg-white p-5'
    >
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  )
}

export default ShopItem
