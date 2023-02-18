import Head from 'next/head'
import Navbar from './Navbar'
// import Particle from './components/particle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yeasir Hossain</title>
        <meta name="description" content="yeasir's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Particle></Particle> */}
        <h1>hello home</h1>
      </main>
    </>
  )
}
