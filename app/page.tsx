import Image from 'next/image'
import About from '@/components/About'

export default function Home() {
  return (

    // main app:
    // display: flex; 
    // padding-left: 1rem;
    // padding-right: 1rem; 
    // flex-direction: column; 
    // align-items: center; 

    <main className='flex flex-col items-center px-4'>
      <About />



    </main>
  )
}
