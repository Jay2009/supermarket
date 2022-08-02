import type { NextPage } from "next"
import Counter from "../../components/counter"
import SideBar from "../../components/sideBar"
import SuperMarket from "../../components/supermarket"
import Topbar from "../../components/topBar"

const SmartWatch = () => {
  return (
    <div className='h-full w-full'>
      <div className='top-bar'>
        <Topbar />
      </div>
      <div className='main-body'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='right-main'>SmartWatch</div>
      </div>
    </div>
  )
}

export default SmartWatch
