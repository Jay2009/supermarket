import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from "react"
import { CustomLinkObj } from "../../types/item"

let links: CustomLinkObj = []

export default function SideBar() {
  const router = useRouter()
  const filteredPath = router.pathname.split("/", 2)
  const [isOpened, setIsOpened] = useState(false)

  if (filteredPath[1] == "stock") {
    links = [
      {
        link: "Korea Stock",
        path: "/stock",
      },
      {
        link: "U.S Stock",
        path: "/stock/us",
      },
      {
        link: "Shanghai Stock",
        path: "/stock/shanghai",
      },
      {
        link: "HongKong Stock",
        path: "/stock/hongkong",
      },
      {
        link: "Europe Stock",
        path: "/stock/europe",
      },
      {
        link: "Etc",
        path: "/stock/etc",
      },
    ]
  }
  if (filteredPath[1] == "stock-game") {
    links = [
      {
        link: "Stock Game",
        path: "/stock-game",
      },
      {
        link: "Test",
        path: "/stock-game/test",
      },
    ]
  }
  if (filteredPath[1] == "stock-community") {
    links = [
      {
        link: "Community",
        path: "/stock-community",
      },
    ]
  }
  if (filteredPath[1] == "about-jay") {
    links = [
      {
        link: "Me",
        path: "/about-jay",
      },
    ]
  }

  const onSlider = () => {
    setIsOpened(!isOpened)
  }
  return (
    <nav className={isOpened == false ? "nav-bar" : "navbar-close"}>
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
                {isOpened == true ? (
                  list.link == "Korea Stock" ? (
                    <div className='icon-content'>
                      <img
                        src={require("../assets/korea.png")}
                        className='sub-menu-icon'
                      />
                      <div className='icon-title'>{list.link}</div>
                    </div>
                  ) : list.link == "U.S Stock" ? (
                    <div className='icon-content'>
                      <img
                        src={require("../assets/us.png")}
                        className='sub-menu-icon'
                      />
                      <div className='icon-title'>{list.link}</div>
                    </div>
                  ) : list.link == "Shanghai Stock" ? (
                    <img
                      src={require("../assets/china.png")}
                      className='sub-menu-icon'
                    />
                  ) : list.link == "HongKong Stock" ? (
                    <img
                      src={require("../assets/hongkong.png")}
                      className='sub-menu-icon'
                    />
                  ) : list.link == "Europe Stock" ? (
                    <img
                      src={require("../assets/europe.png")}
                      className='sub-menu-icon'
                    />
                  ) : list.link == "Etc" ? (
                    <img
                      src={require("../assets/world.png")}
                      className='sub-menu-icon'
                    />
                  ) : (
                    ""
                  )
                ) : (
                  list.link
                )}
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
        .sub-menu-icon {
          width: auto;
          height: auto;
          max-width: 50px;
          max-height: 50px;
        }
        .comp-name {
          font-size: 10px;
          width: 50%;
        }
        .nav-bar {
          width: 10%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: #ffffff;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
        .navbar-close {
          width: 5%;
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
