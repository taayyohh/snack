import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/app/providers'
import localFont from 'next/font/local'

const arialNarrow = localFont({
  src: [
    {
      path: '../public/fonts/arialnarrow.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/arialnarrow_bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/arialnarrow_italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/arialnarrow_bolditalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zora Starter App',
  description: 'Get started with Zora',
  openGraph: {
    images: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Zora Starter App',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zora Starter App',
    description: 'Get started with Zora',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={arialNarrow.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
