import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from "react"

interface LinkObject {
  link: string
  path: string
}
export interface CustomLinkObj extends Array<LinkObject> {}

let links: CustomLinkObj = []

export default function SideBar() {
  const router = useRouter()
  const filteredPath = router.pathname.split("/", 2)
  const [isOpened, setIsOpened] = useState(false)

  if (filteredPath[1] == "composition") {
    links = [
      {
        link: "CCTV",
        path: "/composition",
      },
      {
        link: "환경 센서",
        path: "/composition/env-sensor",
      },
      {
        link: "실내 측위",
        path: "/composition/gps",
      },
      {
        link: "스마트 밴드",
        path: "/composition/smart-band",
      },
      {
        link: "스마트 워치",
        path: "/composition/smart-watch",
      },
      {
        link: "안전 고리",
        path: "/composition/safety-hook",
      },
    ]
  }
  if (filteredPath[1] == "event") {
    links = [
      {
        link: "알람 현황",
        path: "/event",
      },
      {
        link: "이벤트 이력",
        path: "/event/event-history",
      },
      {
        link: "임계치 설정",
        path: "/event/threshold",
      },
    ]
  }
  if (filteredPath[1] == "performance") {
    links = [
      {
        link: "무슨 센서? ex)",
        path: "/performance",
      },
    ]
  }
  if (filteredPath[1] == "admin") {
    links = [
      {
        link: "사용자 관리",
        path: "/admin",
      },
    ]
  }

  const onSlider = () => {
    setIsOpened(!isOpened)
  }
  return (
    <nav className={isOpened == false ? "navbar" : "navbar-close"}>
      <div className='list'>
        <div className='logo'>
          <div onClick={onSlider}>
            <img
              src={require("../assets/burger.png")}
              className='burger-logo'
            />
          </div>
        </div>

        {links.map((list, i) => {
          return (
            <Link key={i} href={list.path} className='flex justify-center'>
              <a
                className={
                  router.pathname === list.path
                    ? "select link"
                    : "unselected link"
                }
              >
                {list.link}
              </a>
            </Link>
          )
        })}
      </div>

      <style jsx>{`
        .logo {
          opacity: 0.8;
          width: 50px;
          height: 30px;
        }
        .logo:hover {
          opacity: 1;
          cursor: pointer;
        }
        .burger-logo {
          display: flex;
        }
        .comp-name {
          font-size: 10px;
          width: 50%;
        }
        .navbar {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: #ffffff;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
        .navbar-close {
          width: 40%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: #ffffff;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }

        .list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .link {
          font-weight: 600;
          font-size: 16px;
          color: black;
          opacity: 0.5;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .select {
          position: relative;
          opacity: 1;
        }
        .select:hover {
          border-bottom: 2px;
        }
      `}</style>
    </nav>
  )
}
