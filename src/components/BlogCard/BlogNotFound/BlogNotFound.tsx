import { jersey } from '@/utils/helper'
import React from 'react'

function BlogNotFound() {
  return (
    <div className='flex justify-center items-center'>
      <h2 className={`${jersey.className} text-3xl uppercase`}>blog not available</h2>
    </div>
  )
}

export default BlogNotFound
