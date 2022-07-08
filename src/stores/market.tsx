import { observable } from "mobx"
import { Item } from "../types/item"

interface CurrentValue {
  price: number
  count: number
}

type MarketType = {
  selectedItems: Item[]
  put: (name: string, price: number, count: number) => void
  take: (name: string) => void
  total: () => void | number | string
}

//interface Tests extends Array<Test> {}

const marketStore = observable<MarketType>({
  //  @observable
  selectedItems: [],

  // @action
  put(name, price) {
    const exists: Item = this.selectedItems.find(
      (item) => item.name === name
    ) as Item
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      })
      return
    }
    exists.count++
  },

  take(name) {
    const itemToTake: Item = this.selectedItems.find(
      (item) => item.name === name
    ) as Item

    itemToTake.count--
    if (itemToTake.count == 0) {
      // if the number of count is 0
      this.selectedItems.filter((element) => element !== itemToTake)
    }
  },

  get total() {
    console.log("total price")
    return this.selectedItems.reduce(
      (previous: string, current: CurrentValue) => {
        return previous + current.price * current.count
      },
      0
    )
  },
})

export { marketStore }
