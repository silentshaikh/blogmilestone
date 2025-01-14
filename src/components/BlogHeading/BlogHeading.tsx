import {  jersey } from '@/utils/helper'


function BlogHeading() {
  return (
    <div className={`${jersey.className} bg-teal-200 p-4 max-[500px]:py-3 max-[450px]:w-[300px] max-[450px]:text-center max-[400px]:w-[260px] max-[330px]:w-[210px]`}>
      <h1 className='uppercase text-5xl max-[600px]:text-4xl max-[330px]:text-3xl'>From Bugs to Breakthroughs</h1>
    </div>
  )
}

export default BlogHeading
