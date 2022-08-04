import type { NextPage } from "next"
import Counter from "../../components/counter"
import SideBar from "../../components/sideBar"
import SuperMarket from "../../components/supermarket"
import Topbar from "../../components/topBar"

const ShanghaiStock = () => {
  return (
    <div className='h-full w-full'>
      <div className='top-bar'>
        <Topbar />
      </div>
      <div className='main-body'>
        <SideBar />
        <div className='right-main'>Gps</div>
      </div>
    </div>
  )
}

export default ShanghaiStock
