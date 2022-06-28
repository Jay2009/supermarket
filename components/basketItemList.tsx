import { useObserver } from "mobx-react"
import React from "react"
import useStore from "../hooks/useStore"
import BasketItem from "./basketItem"

interface Iitem {
  name: string
  price: number
  count: number
  key: string
  onTake: () => void
}

const BasketItemList = () => {
  const { market }: any = useStore()

  const onTake = (name: string) => {
    market.take(name)
  }

  return useObserver(() => {
    const itemList = market.selectedItems.map((item: Iitem) => (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={item.name}
        onTake={onTake}
      />
    ))

    return (
      <div>
        {itemList}
        <hr />
        <p className='mt-4'>
          <b>총합: </b> {market.total}원
        </p>
      </div>
    )
  })
}

export default BasketItemList
