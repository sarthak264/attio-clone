import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attio Landing Page Clone',
  description:
    'A responsive and modern clone of the Attio CRM landing page, built by Sarthak Sharma as a front-end development project. Made with React and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
