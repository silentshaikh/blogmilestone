import { jersey, poppins } from '@/utils/helper'
import React from 'react'

function AboutContent() {
  return (
    <div className='flex flex-col items-center text-center gap-5'>
      <h1 className={`uppercase ${jersey.className} text-5xl text-teal-300 text-center w-[660px] max-[680px]:w-[600px] max-[600px]:w-[500px] max-[500px]:w-[400px] max-[420px]:w-[350px] max-[370px]:w-[330px] max-[350px]:w-[310px] max-[320px]:w-[280px] max-[280px]:w-[240px]`}>The Journey of a Thousand Lines</h1>
      <p className={`${poppins.className} text-[13px] text-center w-[660px] text-slate-400 max-[680px]:w-[550px] max-[600px]:w-[500px] max-[530px]:w-[450px] max-[470px]:w-[400px] max-[420px]:w-[350px] max-[370px]:w-[320px] max-[350px]:w-[300px] max-[320px]:w-[260px] max-[280px]:w-[230px]`}>Welcome to a world where every line of code tells a story, and every keystroke builds something extraordinary! Here, we don&apos;t just write code; we craft solutions, explore ideas, and push the boundaries of innovation. Our blog is more than a resource—it&apos;s a community where developers of all levels come to learn, share, and grow. Whether you&apos;re debugging your first &apos;Hello, World!&apos; or architecting complex systems, you&apos;re not alone. Together, let&apos;s decode the future, one brilliant idea at a time.</p>
    </div>
  )
}

export default AboutContent
