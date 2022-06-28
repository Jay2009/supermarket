import { counter } from "../stores/counterStore"
import { market } from "../stores/market"

const useStore = () => {
  return { counter, market }
}

export default useStore
