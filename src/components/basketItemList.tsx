import { useObserver } from "mobx-react"
import React from "react"
import useStore from "../hooks/useStore"
import BasketItem from "./basketItem"
import { ItemWithKey } from "../types/item"

const BasketItemList = () => {
  const { marketStore }: any = useStore()

  const onTake = (name: string) => {
    marketStore.take(name)
  }

  return useObserver(() => {
    const itemList = marketStore.selectedItems.map((item: ItemWithKey) => (
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
          <b>총합: </b> {marketStore.total}원
        </p>
      </div>
    )
  })
}

export default BasketItemList
