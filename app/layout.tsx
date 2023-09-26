import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
// import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

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
        <ToasterProvider/>
        <RegisterModal/>
        {/* <Modal actionLabel="Submit" title='Try String HEHE'isOpen/> */}
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
