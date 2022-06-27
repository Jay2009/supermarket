import React from "react"
import { useObserver } from "mobx-react"
import useStore from "../hooks/useStore"

const Counter = () => {
  const { counter } = useStore()

  const increase = () => {
    counter.increase()
  }

  const decrease = () => {
    counter.decrease()
  }

  return useObserver(() => (
    <div className='flex flex-col content-center items-center justify-center'>
      <h1 className='my-8 flex text-4xl font-bold'>{counter.number}</h1>
      <div className=' my-8 flex flex-row content-center justify-center gap-4 align-middle'>
        <button
          onClick={increase}
          className='flex h-8 w-8 items-center justify-center rounded-md border-solid  border-transparent bg-blue-300 p-6 align-middle text-2xl shadow-xl'
        >
          +1
        </button>
        <button
          onClick={decrease}
          className='flex h-8 w-8 items-center justify-center rounded-md border-solid bg-blue-300 p-6  align-middle text-2xl shadow-xl '
        >
          -1
        </button>
      </div>
    </div>
  ))
}

export default Counter
