'use client';
import BlogInput from '../BlogInput/BlogInput'
import BlogButton from '../BlogButton/BlogButton'
import { useBlogHook } from '@/Context/Context';

function BlogSearch() {
  const {onSerchForm} = useBlogHook();
  return (
    <form action='' onSubmit={onSerchForm} className='flex justify-center items-center gap-10 max-[580px]:gap-5 max-[480px]:flex-col'>
      <BlogInput/>
      <BlogButton/>
    </form>
  )
}

export default BlogSearch
