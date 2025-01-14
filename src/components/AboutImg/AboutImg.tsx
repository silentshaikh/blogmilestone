import Image from 'next/image'
import React from 'react'

function AboutImg() {
  return (
    <div className='overflow-hidden'>
      <Image className='w-[800px] h-[50vh]  blur-sm transition-transform duration-500 hover:blur-none hover:scale-125  max-[820px]:w-[700px] max-[720px]:w-[600px] max-[620px]:w-[500px] max-[520px]:w-[400px] max-[420px]:w-[300px] max-[320px]:w-[250px]' src='/images/linear-gradient-retro-computer_52683-60216.jpg' alt='About-img' height={100} width={500} />
    </div>
  )
}

export default AboutImg
