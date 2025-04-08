import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CMSDI',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="bg-gray-50">
      <body className="relative min-h-screen flex flex-col font-sans text-gray-900">
        {/* Barre de navigation */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full animate-fadeInDown space-y-6">
          {children}
        </main>

        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  )
}
