import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const projects = [
  {
    name: 'DabSearch',
    url: 'https://dabsearch.vercel.app',
    description: 'A search engine using Google API',
    imageSrc: '/images/projects/dabsearch.png',
    imageAlt: 'Thumbnail for DabSearch'
  },
  {
    name: 'DabUI',
    url: 'https://dabui.vercel.app',
    description: 'A design system for developing',
    imageSrc: '/images/projects/dabui.png',
    imageAlt: 'Thumbnail for DabUI'
  },
  {
    name: 'AiryToDo',
    url: 'https://airytodo.vercel.app',
    description: 'A minimal todo app',
    imageSrc: '/images/projects/airytodo.png',
    imageAlt: 'Thumbnail for AiryToDo'
  },
  {
    name: '予家',
    url: 'https://www.yujia.world',
    description: 'A real estate app',
    imageSrc: '/images/projects/yujia.png',
    imageAlt: 'Thumbnail for Yujia'
  },
]

export default function Projects() {
  return (
    <div className="bg-[url('/images/light-bg.jpg')] bg-cover dark:bg-[url('/images/dark-bg.png')]">
      <Head>
        <title>Projects - DabAZ</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <Navbar />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">DabAZ</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              Projects
            </h3>
          </div>
        </div>
        <section className="py-16">
					<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
						{
							projects.map(project => (
								<li class="text-center mb-4">
									<a href={project.url}>
										<img class="border border-slate-300 dark:border-gray-700 rounded-2xl" src={project.imageSrc} alt={project.imageAlt} />
										<div class="mt-3 text-xl font-bold">
											{project.name}
										</div>
										{project.description && (
											<div class="opacity-70">
												{project.description}
											</div>
										)}
									</a>	
								</li>
							))
						}
					</ul>
				</section>
      </div>

      <Footer />
    </div>
  )
}