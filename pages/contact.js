import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactFunction from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-[url('/images/light-bg.jpg')] bg-cover dark:bg-[url('/images/dark-bg.png')]">
      <Head>
        <title>Contact - DabAZ</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <Navbar />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">DabAZ</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              Contact
            </h3>
          </div>
        </div>
        <ContactFunction />
      </div>

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