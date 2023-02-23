import Head from 'next/head'
import Particle from './components/Shared/Particle'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'


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
        <div className='max-w-[88rem] mx-auto px-2'>
          <Banner></Banner>
        </div>
        {/* <Projects></Projects> */}
        <div className='max-w-[88rem] mx-auto px-2'>
          <Experience></Experience>
        </div>
        <Footer />
        <Particle />
      </main>
    </>
  )
}
