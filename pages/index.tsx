import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La hora del Vermú</title>
        <meta name="description" content="Amig@s ingenieros expatriados en Alemania compartiendo cotilleos, anécdotas y sabiduría con un toque de humor. Cris, Ionut y Jesús te contarán historias divertidas e interesantes que querrás comentar con tus amig@s en el vermú de los domingos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="heading">La <span className="h">h</span><span className="o">o</span><span className="r">r</span><span className="a">a</span><br />d<span className="el">el</span> V<span className="e">e</span><span className="r">r</span><span className="m">m</span>ú</h1>
        <div className="typewriter">
            <h2 className="sub-heading">El chispazo de la vida.</h2>
        </div>
      </main>
    </>
  )
}
