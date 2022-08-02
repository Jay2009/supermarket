import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Router } from "next/router"
import Counter from "../components/counter"
import SideBar from "../components/sideBar"
import SuperMarket from "../components/supermarket"
import Topbar from "../components/topBar"

import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className='h-full w-full'>
      <div className='top-bar'>
        <Topbar />
      </div>

      <Counter />
      <hr />
      <SuperMarket />
    </div>
  )
}

export default Home
