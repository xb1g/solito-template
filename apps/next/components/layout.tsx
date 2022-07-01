import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Jobtion</title>
        <meta name="description" content="app web askdjaldja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
