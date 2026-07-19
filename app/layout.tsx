import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'D-LABS | Web Development & Design Services | Kenya',
  description:
    'Professional web development, redesign, deployment, and training services. D-LABS builds modern, high-performance websites for businesses in Embu, Kenya.',
  keywords:
    'web development, web design, website redesign, deployment, web training, Kenya, Embu',
  authors: [{ name: 'D-LABS' }],
  creator: 'D-LABS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dlabs.ke',
    title: 'D-LABS | Web Development & Design Services',
    description: 'Professional web development and design services from D-LABS',
    images: [
      {
        url: 'https://dlabs.ke/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'D-LABS Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D-LABS | Web Development & Design Services',
    description: 'Professional web development and design services from D-LABS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://dlabs.ke',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
