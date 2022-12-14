import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { CameraIcon } from '@heroicons/react/24/solid'

export default function About() {
  return (
    <div className="bg-[url('/images/light-bg.jpg')] bg-cover dark:bg-[url('/images/dark-bg.png')]">
      <Head>
        <title>About - DabAZ</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <Navbar />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">DabAZ</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              About
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-none">
                  <img
                    className="object-cover object-center"
                    src="/images/dabaz-about.png"
                    alt="DabAZ photograph by Ewen"
                  />
                </div>
                <figcaption className="mt-3 flex">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">Photograph by{" "}
                    <a href="https://instagram.com/ewen0331" className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                      Ewen
                    </a>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 dark:text-gray-300">
                I usually call myself as a digital craftsman. I&apos;m an ethical hacker, artist, indie developer, and designer. If you are interested in these jobs, feel free to{" "}
                <a href="/contact" className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                  contact me
                </a>
                .
              </p>
            </div>
            <div className="mt-5 prose prose-blue text-lg text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Music is the most important shit for me. I feel like music gives me passion and a brave heart to live my life. Being raised in China and United States, I had the interest in pop, rock, and hip-hop music when I was really young. I began my music career as a DJ in the band of my high school, which is{" "}
                <a href="https://www.bjfles.com/" className="underline underline-offset-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                  Beijing Haidian Foreign Language Shi Yan School
                </a>
                , before I began producing my own music. Inspired by Lil Pump and Juice WRLD, I began to change my main genre to hip-hop music. Now, I make different genres of music, including EDM, hip-hop, lo-fi, emo rap, trap, and rock. Here is my{" "}
                <a href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ?si=WThxoM2nTjKN5L06bmqVUw" className="underline underline-offset-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                  Spotify
                </a>
                .
              </p>
              <p>
                I have the desire to be able to face real-life issues with code. That&apos;s why I love coding and developing. No matter it&apos;s a website or an app, I still try my best to make them perfect. I have built over 100 demo projects. 
              </p>
              <p>
                Design is only my hobby and I don&apos;t regard it as a profitable job. I only make UI design, album cover design, and icons design.
              </p>
              <p>
                To learn more about me, here is my{" "}
                <a href="https://dabaz-learn.vercel.app" className="underline underline-offset-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                  DabAZ Learn
                </a>
                {" "}- blog for learning ethical hacking and cyber security, and{" "}
                <a href="https://dabazofficial.com" className="underline underline-offset-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200">
                  DabLinks
                </a>
                {" "}- links to some of my projects and social media.
              </p>
            </div>
          </div>
        </div>
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