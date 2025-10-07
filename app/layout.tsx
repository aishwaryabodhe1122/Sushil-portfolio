import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sushil Chaudhari - Full Stack Developer',
  description: 'Certified (C-DAC) with hands-on internship experience in Java, Spring Boot. Proven track record of building scalable backend systems and delivering enterprise-grade microservices. Proficient in designing RESTful APIs, integrating payment gateways, and deploying secure, high-performance services using Java, Spring Boot, and AWS.',
  keywords: 'Full Stack Developer, Software Engineer, Java, AWS',
  authors: [{ name: 'Sushil Chaudhari' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
