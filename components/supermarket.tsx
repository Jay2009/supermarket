import React from "react"
import SuperMarketTemplate from "../components/supermarketTemplate"
import ShopItemList from "./shopItemList"

const SuperMarket = () => {
  return <SuperMarketTemplate items={<ShopItemList />} basket={null} />
}

export default SuperMarket
