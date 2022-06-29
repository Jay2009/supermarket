import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Counter from "../components/counter"
import SuperMarket from "../components/supermarket"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className='h-full w-full'>
      <Counter />
      <hr />
      <SuperMarket />
    </div>
  )
}

export default Home
