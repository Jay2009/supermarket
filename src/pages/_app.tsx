import "../styles/globals.css"
import type { AppProps } from "next/app"
import "../styles/components/top-side-bar.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='background'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
