import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Foot from '../components/footer'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonam Gupta | Portfolio</title>
        <meta name="description" content="Portfolio of Sonam Gupta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Foot />
      </div>
    </>
  )
}
