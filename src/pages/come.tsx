import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Router } from "next/router"
import Counter from "../components/counter"
import SuperMarket from "../components/supermarket"
import Topbar from "../components/topBar"
import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
import { observer } from "mobx-react"
import Stocks from "../stores/stocks"
import { toJS } from "mobx"
import LineChart from "../components/charts/lineChart"

const Come = observer(() => {
  useEffect(() => {
    Stocks.callTesla()
    Stocks.callApple()
    Stocks.callNvidia()
    Stocks.callAlphabet()
  }, [])

  return (
    <div className='h-full w-full'>
      <Topbar />
      <div className=' flex h-full w-full flex-row '>
        <div className='flex h-5/6 w-full flex-col gap-10 p-7 '>
          {["Tesla", "Apple"].map((chartTitle, i) => (
            <div className=' flex h-full w-full flex-col items-center align-middle'>
              <div className='mb-3 flex text-blue-400 underline underline-offset-4'>
                {chartTitle}
              </div>
              <LineChart
                stockData={
                  chartTitle == "Tesla"
                    ? Stocks.teslaTotalData
                    : Stocks.appleTotalData
                }
                chartTitle={chartTitle}
              />
            </div>
          ))}
        </div>
        <div className='flex h-5/6 w-full flex-col gap-10 p-7 '>
          {["Nvidia", "Alphabet"].map((chartTitle, i) => (
            <div className=' flex h-full w-full flex-col items-center align-middle'>
              <div className='mb-3 flex text-blue-400 underline underline-offset-4'>
                {chartTitle}
              </div>
              <LineChart
                stockData={
                  chartTitle == "Nvidia"
                    ? Stocks.nvidiaTotalData
                    : Stocks.alphabetTotalData
                }
                chartTitle={chartTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Come
