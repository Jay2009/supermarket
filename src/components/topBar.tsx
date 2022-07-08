import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Topbar() {
  const router = useRouter()

  const link = [
    {
      link: "Supermarket",
      path: "/",
    },
    {
      link: "Come&Check",
      path: "/come",
    },
  ]
  return (
    <nav className='navbar'>
      <div className='list'>
        {link.map((list, i) => {
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

      <style jsx>
        {`
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
            gap: 200px;
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
