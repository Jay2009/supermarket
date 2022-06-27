import { observable } from "mobx"

interface AllItems {
  name: string
}

interface Item {
  name: string
  price: number
  count: number
}

interface CurrentValue {
  price: number
  count: number
}

//interface Tests extends Array<Test> {}

const market = observable({
  //  @observable
  selectedItems: [],

  // @action
  put(name: string, price: number, selectedItems: Array<Item>) {
    const exists: any = this.selectedItems.find(
      (item: AllItems) => item.name === name
    )
    if (!exists) {
      selectedItems.push({
        name,
        price,
        count: 1,
      })
      return
    }
    exists.count++
  },

  take(name: string, selectedItems: any) {
    const itemToTake: any = this.selectedItems.find(
      (item: AllItems) => item.name === name
    )
    itemToTake.count--
    if (itemToTake.count == 0) {
      // if the number of count is 0
      selectedItems.remove(itemToTake)
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

export { market }
