'use client';
import { useBlogHook } from '@/Context/Context';
import BlogDetailCont from '../BlogDetailCont/BlogDetailCont'
import BlogDetailSkill from '../BlogDetailSkill/BlogDetailSkill'
import CommentAlert from '../CommentAlert/CommentAlert';

function BlogDetailSection({id}:{id:string}) {
  const {sanityData} = useBlogHook();
  const {blogSan} = sanityData;
  const findBlog = blogSan.find((e) => e.id === id);

 if(findBlog){
  return (
    <section className='bg-emerald-200 pt-44 pb-10 flex flex-col items-center gap-16'>
      <BlogDetailCont img={findBlog.cardImg} name={findBlog.languagename} para={findBlog.languageintro} subheading={findBlog.subHeading}/>
      <BlogDetailSkill detailOne={findBlog.languagedetail} detailTwo={findBlog.languagedetailtwo} name={findBlog.languagename} />
    <CommentAlert/>
    </section>
  )
 }else{
  return(
    <>
    <h1>Blog Not Found</h1>
    </>
  )
 }
}

export default BlogDetailSection
