import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import Layout from '../components/layout'
import { NavBar } from 'app/components/navbar'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  // const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Provider>
        {/* <Layout> */}
        <NavBar />
        <Component {...pageProps} />
        {/* </Layout> */}
      </Provider>
    </>
  )
}

export default MyApp
