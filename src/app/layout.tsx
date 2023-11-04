import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({weight: ['400','700'], subsets: ['latin-ext']})

export const metadata: Metadata = {
  title: 'Github Search App',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}
