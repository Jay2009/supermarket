import React from "react"

interface basket {
  name: string
  price: number
  count: number
  onTake: (name: string) => void
}

const BasketItem = ({ name, price, count, onTake }: basket) => {
  return (
    <div className='mt-4 mb-4 flex w-full'>
      <div className='flex-2'>{name}</div>
      <div className='flex-1'>{price}원</div>
      <div className='flex-1'>{count}</div>
      <div
        onClick={() => onTake(name)}
        className='ml-auto cursor-pointer text-red-300 '
      >
        가져다 놓기
      </div>
    </div>
  )
}

export default BasketItem
