import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Topbar() {
  const router = useRouter()
  const filteredPath = router.pathname.split("/", 2)

  console.log("/" + filteredPath[1], "what pagee url???")

  const link = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Stock",
      path: "/stock",
    },
    {
      link: "Stock Game",
      path: "/stock-game",
    },
    {
      link: "Stock Community",
      path: "/stock-community",
    },
    {
      link: "About Jay",
      path: "/about-jay",
    },
  ]
  return (
    <nav className='top-bar'>
      <div className='list'>
        <div className='logo'>
          <img src={require("../assets/Jay_logo.png")} className='jay-logo' />
        </div>

        {link.map((list, i) => {
          return (
            <Link key={i} href={list.path} className='flex justify-center'>
              <a
                className={
                  "/" + filteredPath[1] == list.path
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

      <style jsx>
        {`
          .logo {
            display: flex;
            flex-direction: raw;
            width: 100px;
            height: 50px;
            margin-left: -5px;
          }
          .jay-logo {
            border-radius: 10px;
            width: auto;
            height: auto;
            max-width: 50px;
            max-height: 50px;
          }
          .comp-name {
            font-size: 10px;
            width: 50%;
          }
          .top-bar {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 30px;
            background: #ffffff;
            height: 50px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
          }

          .list {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 100px;
          }
          .link {
            font-weight: 600;
            font-size: 16px;
            color: black;
            opacity: 0.5;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .select {
            position: relative;
            opacity: 1;
          }
          .select:hover {
            border-bottom: 2px;
          }
        `}
      </style>
    </nav>
  )
}
