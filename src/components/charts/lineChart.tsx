import React, { useEffect, useState } from "react"
import ReactECharts from "echarts-for-react"
import ECharts, { EChartsReactProps } from "echarts-for-react"
import { observer } from "mobx-react-lite"
import { toJS } from "mobx"

interface StockDataProps {
  stockData: number[]
  chartTitle?: string
}

export const LineChart = observer(
  ({ stockData, chartTitle }: StockDataProps) => {
    const [options, setOptions] = useState({
      backgroundColor: "transparent",
      legend: {
        orient: "horizontal",
        show: true,
        top: "0%",
        left: "center",
        textStyle: {
          fontSize: "12px",
          fontFamily: "MicrosoftYaHeiUI",
          color: "#777f9c",
        },
        itemWidth: 8,
        itemHeight: 8,
      },
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 4,
        backgroundColor: "rgba(0,0,0,0.8)",
        borderColor: "#777f9c",
        position: "right",
        valueFormatter: (value: number) => "USD$ " + value,
        textStyle: {
          fontSize: 14,
          color: "#fff",
        },
      },
      grid: {
        top: "8%",
        left: "2%",
        right: "2%",
        bottom: "2%",
        containLabel: true,
      },
      xAxis: {
        type: "time",
        scale: true,
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#ac9b9b",
          fontSize: 12,
          width: 50,
        },
        splitNumber: 10,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#f3e3e3",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#e7cbcb",
          },
        },
      },
      yAxis: {
        type: "value",
        scale: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#e7cbcb",
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#e7cbcb",
          },
        },
        axisLabel: {
          fontSize: 12,
          color: "#ac9b9b",
        },
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: "Highest",
          type: "line",
          stack: false,
          smooth: false,
          symbol: "none",
          data: stockData,
        },
      ],
    })
    console.log(toJS(stockData), chartTitle, "is there data in children comp")

    useEffect(() => {
      setOptions({
        ...options,
        series: [
          {
            name: "Highest",
            type: "line",
            stack: false,
            smooth: false,
            symbol: "none",
            data: stockData,
          },
        ],
      })
    }, [stockData])

    return (
      <>
        <ReactECharts
          className='chart'
          style={{
            width: "100%",
            height: "100%",
          }}
          option={options}
        />
      </>
    )
  }
)

export default LineChart
