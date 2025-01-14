'use client';
import { useBlogHook } from '@/Context/Context'
import Image from 'next/image'
import React from 'react'

function ThreeImg() {
    const {sanityData} = useBlogHook();
    const {infoImg} = sanityData.homeSan;
  return (
    <div>
      <Image className='w-[350px] border-8 border-double border-white max-[800px]:w-[300px] max-[710px]:w-[280px] max-[660px]:w-[260px] max-[620px]:w-[350px] max-[380px]:w-[300px] max-[310px]:w-[250px]' src={infoImg} alt='Coding' height={100} width={100}/>
    </div>
  )
}

export default ThreeImg
