'use client';
import { jersey, poppins } from "@/utils/helper";
import { SanityBlog } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { ImHtmlFive2 } from "react-icons/im";

function BlogCard({blog}:{blog:SanityBlog}) {
  const navigDetail = useRouter();
  return (
    <div key={blog.id} className="flex flex-col item-start border-4 border-slate-400 border-dashed p-2 max-[750px]:w-[330px] max-[720px]:w-[300px] max-[630px]:w-[80%] max-[380px]:w-[90%] ">
      <Image className="w-[100%] max-[1100px]:h-[230px] max-[900px]:w-[350px] max-[800px]:w-[320px] max-[630px]:w-[100%] min-[1690px]:size-[500px]" src={blog.cardImg} alt={blog.languagename} height={300} width={360}/>
      <h4 className={`${jersey.className} text-2xl uppercase`}>{blog.languagename}</h4>
      <div className="flex item-center gap-40 max-[900px]:gap-24 max-[900px]:justify-around max-[720px]:justify-center max-[630px]:justify-between">
        <div className="flex  items-center gap-1">
        {/* <ImHtmlFive2 className="text-[#EE5F29]"/> */}
        <Image className="size-[15px] " src={blog.logoImg} alt={blog.languagename} height={5} width={20}/>
    <h5 className={`${poppins.className} text-[13px] font-bold max-[750px]:text-[9px] max-[630px]:text-[13px] max-[410px]:text-[10px] max-[332px]:text-[8px]`}>{blog.subHeading}</h5>
        </div>
        <button className={` ${jersey.className} text-sm bg-green-300 px-2 py-1 hover:animate-pulse max-[720px]:text-[11px]`} onClick={() => navigDetail.push(`/blog/${blog.id}`)}>{blog.buttonname}</button>
      </div>
    </div>
  )
}

export default BlogCard
