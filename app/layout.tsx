import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Claire Peng | Personal Portfolio',
  description: 'Claire Peng is a junior fullstack developer with a creative edge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      {/* body: position relative; padding-top: 7rem; @media (min-width: 640px) {padding-top 9rem} */}
      <body className={`${inter.className} bg-grey-50 text-gray-950 
      relative pt-28 sm:pt-36
      h-[5000px]`}>
        
          {/* pink gradient */}
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
          rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

          {/* purple gradient */}
          <div className="bg-[#d7d3f3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
          rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-8rem]"></div>
        
        {/* header */}
        <Header/>
        {children}
        {/* footer */}

      </body>
    </html>
  )
}
