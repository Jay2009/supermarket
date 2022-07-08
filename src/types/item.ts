interface Item {
  name: string
  price: number
  count: number
}

interface ItemWithOnTake extends Item {
  onTake: (name: string) => void
}

interface ItemWithKey extends ItemWithOnTake {
  key: string
}

export type { Item, ItemWithOnTake, ItemWithKey }
