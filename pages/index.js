import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Weclcome to my home page</h1>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About Page</h2>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="/grades" className={styles.card}>
            <h2>Grades Page</h2>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Go Back</h2>
          </Link>
        </div>

        <div className={styles.grid_container} style={{display: "grid"}}>
          <div className={styles.grid_item}>
            <h2>What does C.R.U.D. stand for?</h2>
          </div>
          <div>
            <ul>
              <li>Create</li>
              <li>Read</li>
              <li>Update</li>
              <li>Delete</li>
            </ul>           
          </div>
        </div>
        <button>View all this info</button>
        <footer>In class Example #1</footer>
      </main>
    </>
  )
}
