import BlogDetailImg from '../BlogDetailImg/BlogDetailImg'
import BlogDetailContent from '../BlogDetailContent/BlogDetailContent'

function BlogDetailCont({img,name,subheading,para}:{img:string,name:string,subheading:string,para:string}) {
  return (
    <section className=' flex justify-center items-center gap-20 max-[1010px]:gap-10 max-[710px]:gap-7 max-[600px]:flex-col'>
      {/* <Image src='/images/images (6).jpg' alt='html' height={400} width={400} /> */}
      <BlogDetailImg  img={img} name={name} />
      <BlogDetailContent name={name} para={para} subheading={subheading} />
    </section>
  )
};
export default BlogDetailCont;