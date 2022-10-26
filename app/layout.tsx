import './globals.css'
import { Inter } from '@next/font/google'

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-neutral-50 dark:bg-neutral-900">
      <head>
        <title>DabAZ</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
