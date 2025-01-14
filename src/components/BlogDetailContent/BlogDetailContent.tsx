import { jersey, poppins } from '@/utils/helper'
import React from 'react'

function BlogDetailContent({name,subheading,para}:{name:string,subheading:string,para:string}) {
  return (
    <div className={` ${poppins.className} flex flex-col items-start gap-2`}>
      <h3 className={`${jersey.className} text-4xl text-gray-400 uppercase`}>{name}</h3>
      <h4 className={`font-bold text-[13px]`}>{subheading}</h4>
      <p className='w-[400px] text-[14px] text-justify  max-[870px]:w-[350px] max-[760px]:w-[300px] max-[760px]:text-[13px] max-[710px]:w-[250px] max-[630px]:text-[12px] max-[600px]:w-[450px] max-[520px]:w-[400px] max-[470px]:w-[350px] max-[420px]:w-[320px] max-[370px]:w-[280px] max-[320px]:w-[220px] max-[280px]:text-[10px]'>{para}</p>
    </div>
  )
}

export default BlogDetailContent
