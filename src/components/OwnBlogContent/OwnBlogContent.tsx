'use client';

import { useBlogHook } from "@/Context/Context";
import { cherry, jersey } from "@/utils/helper";

function OwnBlogContent() {
    const {sanityData} = useBlogHook();
    const {howto,ownblog} = sanityData.homeSan;
  return (
    <div className={`${cherry.className} flex justify-center gap-64 `}>
      <h3 className={` ${jersey.className} rotate-90 text-3xl relative top-36 -left-36 border-slate-300 border-4 bg-emerald-200 text-white text-center p-2 max-[960px]:-left-10 max-[790px]:rotate-0 max-[790px]:w-20 max-[730px]:text-2xl max-[730px]:w-14 max-[730px]:left-0 max-[680px]:-left-10 max-[680px]:top-28 max-[610px]:left-0 max-[550px]:rotate-45 max-[550px]:top-20 max-[550px]:-left-14 max-[450px]:-left-32 max-[430px]:-left-20 max-[400px]:rotate-0 max-[400px]:w-[300px] max-[400px]:top-28 max-[400px]:left-0 max-[340px]:w-[250px]`}>{howto}</h3>
      <h3 className="text-5xl w-[300px] text-center text-slate-500 max-[680px]:text-4xl max-[680px]:w-[200px] max-[550px]:absolute max-[550px]:right-8 max-[400px]:text-3xl max-[350px]:right-0">{ownblog}</h3>
    </div>
  )
}

export default OwnBlogContent
