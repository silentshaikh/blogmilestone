'use client';
import { useBlogHook } from '@/Context/Context'
import Image from 'next/image';
import React from 'react'

function NoteImg() {
    const {sanityData} = useBlogHook();
    const {noteImg} = sanityData.homeSan;
  return (
    // top-96 left-[1000px]
    <>
    <div className='absolute  max-[570px]:top-40 max-[550px]:left-72 max-[400px]:hidden'>
      <Image className='size-[100px]' src={noteImg} alt='note-img' height={100} width={100}/>
    </div>
    </>
  )
}

export default NoteImg
