import { observable, runInAction, toJS } from "mobx"
import axios from "axios"

//const ipAddress = process.env.IP_ADDRESS
//console.log(ipAddress, "dddddddd")

const Stocks = observable({
  samsung: [],
  tesla: [],
  teslaTimestamp: [],
  teslaPrice: [],
  teslaTotalData: [],

  apple: [],
  appleTimestamp: [],
  applePrice: [],
  appleTotalData: [],

  nvidia: [],
  nvidiaTimestamp: [],
  nvidiaPrice: [],
  nvidiaTotalData: [],

  alphabet: [],
  alphabetTimestamp: [],
  alphabetPrice: [],
  alphabetTotalData: [],

  async callSamsung() {
    axios.get("/data/samsung.json").then((response) => {
      runInAction(() => {
        this.samsung = response.data
        console.log(response.data[0].timestamp, " : samsung ")
      })
    })
  },

  async callTesla() {
    let dataArr: [] = []
    await axios.get("/data/tesla.json").then((response) => {
      runInAction(() => {
        this.tesla = response.data.chart.result[0].meta.currency
        this.teslaTimestamp = response.data.chart.result[0].timestamp
        this.teslaPrice = response.data.chart.result[0].indicators.quote[0].high

        for (let i = 0; i < this.teslaTimestamp.length; i++) {
          dataArr = this.teslaTimestamp.map((val, idx) => [
            this.teslaTimestamp[idx] * 1000,
            this.teslaPrice[idx].toFixed(3) === null
              ? 0
              : this.teslaPrice[idx].toFixed(3),
          ])
        }
        this.teslaTotalData = dataArr
      })
    })
  },

  async callApple() {
    let dataArr: [] = []
    await axios.get("/data/apple.json").then((response) => {
      runInAction(() => {
        this.apple = response.data.chart.result[0].meta.currency
        this.appleTimestamp = response.data.chart.result[0].timestamp
        this.applePrice = response.data.chart.result[0].indicators.quote[0].high

        for (let i = 0; i < this.appleTimestamp.length; i++) {
          dataArr = this.appleTimestamp.map((val, idx) => [
            this.appleTimestamp[idx] * 1000,
            this.applePrice[idx].toFixed(3) === null
              ? 0
              : this.applePrice[idx].toFixed(3),
          ])
        }
        this.appleTotalData = dataArr
      })
    })
  },

  async callNvidia() {
    let dataArr: [] = []
    await axios.get("/data/nvidia.json").then((response) => {
      runInAction(() => {
        this.nvidia = response.data.chart.result[0].meta.currency
        this.nvidiaTimestamp = response.data.chart.result[0].timestamp
        this.nvidiaPrice =
          response.data.chart.result[0].indicators.quote[0].high

        for (let i = 0; i < this.nvidiaTimestamp.length; i++) {
          dataArr = this.nvidiaTimestamp.map((val, idx) => [
            this.nvidiaTimestamp[idx] * 1000,
            this.nvidiaPrice[idx].toFixed(3) === null
              ? 0
              : this.nvidiaPrice[idx].toFixed(3),
          ])
        }
        this.nvidiaTotalData = dataArr
      })
    })
  },

  async callAlphabet() {
    let dataArr: [] = []
    await axios.get("/data/alphabet.json").then((response) => {
      runInAction(() => {
        this.alphabet = response.data.chart.result[0].meta.currency
        this.alphabetTimestamp = response.data.chart.result[0].timestamp
        this.alphabetPrice =
          response.data.chart.result[0].indicators.quote[0].high

        for (let i = 0; i < this.alphabetTimestamp.length; i++) {
          dataArr = this.alphabetTimestamp.map((val, idx) => [
            this.alphabetTimestamp[idx] * 1000,
            this.alphabetPrice[idx].toFixed(3) === null
              ? 0
              : this.alphabetPrice[idx].toFixed(3),
          ])
        }
        this.alphabetTotalData = dataArr
      })
    })
  },
})

export default Stocks
