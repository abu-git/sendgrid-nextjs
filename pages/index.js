import Head from 'next/head'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SendGrid with NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center'>
        <Contact />
      </main>

      
    </div>
  )
}
