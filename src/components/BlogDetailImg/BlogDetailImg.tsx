import Image from 'next/image'
import React from 'react'

function BlogDetailImg({img,name}:{img:string,name:string}) {
  return (
    <div>
      <Image className='h-[350px] w-[500px] border-8 p-2 border-dashed border-teal-100 max-[970px]:w-[450px] max-[915px]:w-[400px] max-[810px]:w-[350px] max-[760px]:w-[320px] max-[630px]:w-[300px] max-[600px]:w-[500px] max-[520px]:w-[450px] max-[470px]:w-[400px] max-[420px]:w-[350px] max-[370px]:w-[300px] max-[320px]:w-[260px] max-[280px]:w-[240px]' src={img} alt={name} height={400} width={400} />
    </div>
  )
}

export default BlogDetailImg
