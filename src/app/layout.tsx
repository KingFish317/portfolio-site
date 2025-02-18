import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Paul Fallon | Portfolio',
  description: 'Mechanical Engineer with expertise in biomechanics research',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <header className="bg-white border-b border-desert-sand shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-desert-earth">John Paul Fallon</Link>
              <nav>
                <ul className="flex space-x-6">
                  <li><Link href="/" className="text-desert-earth hover:text-desert-clay transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="text-desert-earth hover:text-desert-clay transition-colors">Projects</Link></li>
                  <li><Link href="/about" className="text-desert-earth hover:text-desert-clay transition-colors">About Me</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-desert-sand mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <p className="text-desert-earth">&copy; {new Date().getFullYear()} John Paul Fallon</p>
              <div className="flex space-x-4">
                <a href="https://github.com/KingFish317" target="_blank" rel="noopener noreferrer" className="text-desert-earth hover:text-desert-clay transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/johnpaulfallon" target="_blank" rel="noopener noreferrer" className="text-desert-earth hover:text-desert-clay transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}