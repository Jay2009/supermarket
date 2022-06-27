import React from "react"
import SuperMarketTemplate from "../components/supermarketTemplate"
import BasketItemList from "./basketItemList"
import ShopItemList from "./shopItemList"

const SuperMarket = () => {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  )
}

export default SuperMarket
