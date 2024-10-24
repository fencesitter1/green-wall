import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { GitHubButton } from './components/GithubButton'
import { BgDecoration } from './components/Bgdecoration'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Green Wall · GitHub contribution graph generator',
  description: 'GitHub contribution graph generator.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="m-0 h-full overflow-y-auto bg-white">
        <div className="min-h-screen px-4 sm:px-5 md:mx-auto md:min-w-content md:max-w-content lg:px-0">
          <header>
            <div className="flex items-center h-[65px] md:h-[80px]">
              <Link href="/">
                <span className="flex items-center cursor-pointer bg-white text-xl font-bold ring-4 ring-white">
                  <span className="size-8 relative">
                    <Image src="/favicon.svg" alt="LOGO" fill />
                  </span>
                </span>
              </Link>

              <span className="ml-3 hidden md:inline">Green Wall</span>

              <GitHubButton />
            </div>
          </header>
        </div>
        <main>{children}</main>
      </body>
      <BgDecoration />
    </html>
  )
}
