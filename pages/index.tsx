import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La hora del Vermú</title>
        <meta name="description" content="Amig@s ingenieros expatriados en Alemania compartiendo cotilleos, anécdotas y sabiduría con un toque de humor. Cris, Ionut y Jesús te contarán historias divertidas e interesantes que querrás comentar con tus amig@s en el vermú de los domingos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} animate-gradient bg-[length:350%_350%] leading-normal font-['Chulapa'] font-variant-ligatures-discretionary`}>
        <h1 className={`${styles.heading} text-8xl text-center font-bold uppercase`}>La <span className={styles.h}>h</span><span className={styles.o}>o</span><span className={styles.r}>r</span><span className={styles.a}>a</span><br />d<span className={styles.el}>el</span> V<span className={styles.e}>e</span><span className={styles.r}>r</span><span className={styles.m}>m</span>ú</h1>
        <div className={`mt-5`}>
            <h2 className={`overflow-hidden font-bold text-2xl border-white border-r-2 whitespace-nowrap pr-1 animate-typing uppercase`}>El chispazo de la vida.</h2>
        </div>
      </main>
    </>
  )
}
