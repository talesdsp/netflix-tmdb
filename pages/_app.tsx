import Head from "next/head"
import "~/styles/index.css"

type AppProps = { Component: React.FC; pageProps: {} }

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Netflix</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
