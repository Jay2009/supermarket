import { counterStore } from "../stores/counterStore"
import { marketStore } from "../stores/market"

const useStore = () => {
  return { counterStore, marketStore }
}

export default useStore
