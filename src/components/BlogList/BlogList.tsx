'use client';
import { useBlogHook } from '@/Context/Context';
import BlogCard from '../BlogCard/BlogCard';
import BlogNotFound from '../BlogCard/BlogNotFound/BlogNotFound';

function BlogList() {
  const {sanityData} = useBlogHook();
  const {blogSan} = sanityData;
  if(blogSan.length === 0){
    return(
      <BlogNotFound/>
    )
  }else{
    return (
      <section className='flex justify-center items-center gap-10 flex-wrap max-[750px]:gap-5 min-[1620px]:gap-16 min-[1690px]:gap-24'>
        {
          blogSan.map((e) => {
            return(
              <BlogCard key={e.id} blog={e}/>
            )
          })
        }
      </section>
    )
  }
}

export default BlogList
