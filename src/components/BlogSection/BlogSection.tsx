import React from 'react'
import BlogSearch from '../BlogSearch/BlogSearch'
import BlogHeading from '../BlogHeading/BlogHeading'
import BlogList from '../BlogList/BlogList'

function BlogSection() {
  return (
    <section className='bg-[#e1e1f1] flex justify-center items-center flex-col gap-10  pt-36 pb-14 '>
      <BlogSearch/>
      <BlogHeading/>
      <BlogList/>
      
    </section>
  )
}

export default BlogSection
