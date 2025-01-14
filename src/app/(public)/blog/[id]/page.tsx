
import BlogDetailSection from '@/components/BlogDetailSection/BlogDetailSection'
import CommentSection from '@/components/CommentSection/CommentSection'
import React from 'react'

async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const blogId = (await params).id
  return (
    <main>
      <BlogDetailSection id={blogId}/>
      <CommentSection/>
    </main>
  )
}

export default BlogDetail
