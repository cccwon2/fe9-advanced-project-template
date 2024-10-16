import { Provider } from 'jotai'
import type { Metadata } from 'next'
import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'FE9 Advanced Project',
  description: 'FE9 Advanced Project Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
