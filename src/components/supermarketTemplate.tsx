import React from "react"

interface Shopping {
  items: JSX.Element
  basket: JSX.Element
}

const SuperMarketTemplate = ({ items, basket }: Shopping) => {
  return (
    <div className='ml-auto mr-auto mt-12 flex w-3/4 rounded-xl border border-transparent border-sky-300 shadow-xl'>
      <div className='items-wrapper flex-1  p-2'>
        <h2 className='mb-2 flex justify-center border-b-2 border-transparent border-b-sky-200 pb-2 font-bold shadow-sm'>
          상품
        </h2>
        {items}
      </div>
      <div className='flex-1 p-2'>
        <h2 className='mb-2 flex justify-center border-b-2 border-transparent border-b-sky-200 pb-2 font-bold shadow-sm'>
          장바구니
        </h2>
        {basket}
      </div>
    </div>
  )
}

export default SuperMarketTemplate
