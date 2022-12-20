import styles from '../styles/home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La hora del Vermú</title>
        <meta name="description" content="Amig@s ingenieros expatriados en Alemania compartiendo cotilleos, anécdotas y sabiduría con un toque de humor. Cris, Ionut y Jesús te contarán historias divertidas e interesantes que querrás comentar con tus amig@s en el vermú de los domingos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>La <span className={styles.h}>h</span><span className={styles.o}>o</span><span className={styles.r}>r</span><span className={styles.a}>a</span><br />d<span className={styles.el}>el</span> V<span className={styles.e}>e</span><span className={styles.r}>r</span><span className={styles.m}>m</span>ú</h1>
        <div className={styles.typewriter}>
            <h2 className={styles.subHeading}>El chispazo de la vida.</h2>
        </div>
      </main>
    </>
  )
}
