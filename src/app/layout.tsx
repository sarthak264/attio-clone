import type { Metadata } from 'next'
import { Gilda_Display, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attio Landing Page Clone',
  description:
    'A responsive and modern clone of the Attio CRM landing page, built by Sarthak Sharma as a front-end development project. Made with React and Tailwind CSS.',
}

// ! Figure out the preload warning
const inter = Inter({
  subsets: ['latin'],
  // weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['sans-serif'],
})

const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`antialiased ${inter.variable} ${gilroy.variable} font-inter`}
      >
        {children}
      </body>
    </html>
  )
}
