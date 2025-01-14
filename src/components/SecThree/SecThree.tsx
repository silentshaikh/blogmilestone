import React from 'react'
import ThreeImg from '../ThreeImg/ThreeImg'
import ThreeContent from '../ThreeContent/ThreeContent'
import { rubik } from '@/utils/helper'

function SecThree() {
  return (
    <section className='bg-[#34e7e4] flex flex-col items-center gap-10 py-10 '>
      <h2 className={`text-center ${rubik.className} text-4xl text-teal-300 rounded-lg border-gray-300 border-dashed border-4 bg-gray-200 py-3 px-5 max-[380px]:text-3xl max-[320px]:text-xl`}>Something Check !</h2>
      <div className="flex justify-center items-center gap-16 max-[840px]:gap-5 max-[620px]:flex-col max-[620px]:gap-20">
        <ThreeImg/>
      <ThreeContent/>
      </div>
    </section>
  )
}

export default SecThree
