import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

// const inter = Inter({ subsets: ['latin'] }) --- This is the old font 

export const metadata: Metadata = { // this is a constant layout file where we can change the titles etc 
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
