import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Topbar() {
  const router = useRouter()

  const isComposition = router.pathname.indexOf("composition")
  const filteredPath = router.pathname.split("/", 2)

  console.log("/" + filteredPath[1], "dfdfdf")

  const link = [
    {
      link: "대쉬보드",
      path: "/",
    },
    {
      link: "구성 현황",
      path: "/composition",
    },
    {
      link: "이벤트 현황",
      path: "/event",
    },
    {
      link: "성능 현황",
      path: "/performance",
    },
    {
      link: "관리자",
      path: "/admin",
    },
  ]
  return (
    <nav className='navbar'>
      <div className='list'>
        <div className='logo'>
          <img src={require("../assets/kepco.png")} className='kepco-logo' />
          <div className='comp-name'>발전소 작업자 안전 관리 시스템</div>
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
            width: 170px;
            height: 40px;
          }
          .kepco-logo {
            width: 50%;
            margin-right: 10px;
          }
          .comp-name {
            font-size: 10px;
            width: 50%;
          }
          .navbar {
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
