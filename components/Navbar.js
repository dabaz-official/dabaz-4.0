const navigations = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
]

export default function Navbar() {
  return (
    <div className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 md:justify-start md:space-x-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a 
              href="/" 
              className="flex items-center space-x-3"
            >
              <img
                src="/logos/primary-logo.svg"
                alt="Primary logo"
                className="h-8 w-auto sm:h-10"
                width={80}
                height={80}
              />
              <p className="hidden lg:flex text-3xl text-gray-900 dark:text-gray-50">
                DabAZ
              </p>
            </a>
          </div>
          <nav className="hidden space-x-6 md:flex">
            {navigations.map((navigation) => (
              <a
                key={navigation.name}
                href={navigation.href}
                className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-200"
              >
                {navigation.name}
              </a>
            ))}
          </nav>
          <div className="items-center justify-end flex flex-1 lg:w-0">
            <a
              href="mailto:dabaz@dabazofficial.com" 
              className="ml-4 md:ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-base text-white shadow-sm hover:bg-blue-700 transition duration-200"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}