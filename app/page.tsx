import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
import dabaz from '../public/images/dabaz.jpg'

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div id="#about" className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl">
            DabAZ
          </h2>
          <h3 className="text-md py-2 text-gray-900 dark:text-gray-50 md:text-3xl">
            Ethical hacker, artist, indie developer, and designer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto md:text-xl">
            I&apos;m a freelancer ready for start-up.{" "}
            <Link 
              href="/contact" 
              className="underline underline-offset-2 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-200"
            >
              Join me
            </Link> 
            {" "}and let&apos;s get cracking!
          </p>
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-8 md:h-96 md:w-96">
            <Image 
              src={dabaz} 
              alt="DabAZ" 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}