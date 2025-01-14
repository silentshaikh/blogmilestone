import { jersey } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function ContactContent() {
  return (
    <div className={`${jersey.className} flex items-center justify-center gap-12 max-[810px]:gap-6 max-[760px]:gap-0 max-[530px]:flex-col max-[530px]:gap-7`}>
        <Image className='max-[890px]:w-[150px] max-[660px]:w-[120px] max-[530px]:w-[150px]' src={`/images/hand-phone-cartoon-vector-icon-illustration-technology-object-icon-isolated-flat-vector_138676-14199-removebg-preview.png`} alt='phone' height={100} width={200}/>
      <h1 className='text-6xl w-[400px] max-[810px]:text-5xl max-[760px]:w-[350px] max-[760px]:text-center max-[600px]:w-[300px] max-[320px]:w-[280px] max-[280px]:w-[240px]'>Say Hello to Your Coding Community</h1>
      <Image className='max-[890px]:w-[150px] max-[660px]:w-[100px] max-[530px]:w-[130px]' src={`/images/banana-phone-concept-illustration_114360-19984-removebg-preview.png`} alt='telephone' height={100} width={170}/>
    </div>
  )
}

export default ContactContent
