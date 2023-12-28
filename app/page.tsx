import Image from 'next/image'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/Section_Divider'
import About from '@/components/About'

export default function Home() {
  // main app:
    // display: flex; 
    // padding-left: 1rem;
    // padding-right: 1rem; 
    // flex-direction: column; 
    // align-items: center; 
  return (

    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider/>
      <About /> 



    </main>
  )
}
