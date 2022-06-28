import { useObserver } from "mobx-react"
import React from "react"
import useStore from "../hooks/useStore"
import ShopItem from "./shopItem"

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
]

const ShopItemList = () => {
  // **** useStore에서 market 연결
  const { market }: any = useStore()

  const onPut: any = (name: string, price: number) => {
    market.put(name, price)
  }
  // **** onPut 함수 추가됨
  return useObserver(() => {
    const itemList = items.map((item) => (
      <ShopItem {...item} key={item.name} onPut={onPut} />
    ))
    return <div>{itemList}</div>
  })
}

export default ShopItemList
