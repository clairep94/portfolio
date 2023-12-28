import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>

                {/* round profile image + border with dropshadow */}
                <Image
                alt="Claire Peng" 
                src="https://media.licdn.com/dms/image/C4D03AQFCRdxPaFxEFw/profile-displayphoto-shrink_800_800/0/1583419992936?e=2147483647&v=beta&t=-aicjehD7GkHSo1bveZM_OVBx9hm3BBSxFegSVnEDPg"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className='h-24 w-24 rounded-full
                object-cover border-[0.35rem] border-white
                shadow-xl'
                />

                <span className='text-4xl'>
                    👋
                </span>
            </div>
        </div>
    </section>
  )
}
