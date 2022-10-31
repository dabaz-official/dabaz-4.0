import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-[url('/images/light-bg.jpg')] bg-cover dark:bg-[url('/images/dark-bg.png')]">
      <Head>
        <title>DabAZ</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-7xl my-12 px-4 sm:px-6">
        <div id="#about" className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl">
            DabAZ
          </h2>
          <h3 className="text-md py-2 text-gray-900 dark:text-gray-50 md:text-3xl">
            Ethical hacker, artist, indie developer, and designer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto md:text-xl">
            I&apos;m a freelancer ready for start-up.{" "}
            <a
              href="/contact" 
              className="underline underline-offset-2 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-200"
            >
              Join me
            </a> 
            {" "}and let&apos;s get cracking!
          </p>
          <div className="mx-auto items-center text-center justify-center rounded-full w-80 h-80 relative overflow-hidden mt-8 md:h-96 md:w-96">
            <img
              src="/images/dabaz.jpg" 
              alt="DabAZ" 
              className="justify-center"
            />
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  )
}
