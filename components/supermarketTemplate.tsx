import React from "react"

interface shopping {
  items: string | null
  basket: string | null
}

const SuperMarketTemplate = ({ items, basket }: shopping) => {
  return (
    <div className='ml-auto mr-auto mt-12 flex w-3/4 rounded-md border border-sky-300 shadow-md'>
      <div className='items-wrapper flex-1 p-2'>
        <h2>상품</h2>
        {items}
      </div>
      <div className='flex-1 p-2'>
        <h2>장바구니</h2>
        {basket}
      </div>
    </div>
  )
}

export default SuperMarketTemplate
