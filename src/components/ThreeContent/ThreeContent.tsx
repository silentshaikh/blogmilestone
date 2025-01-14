'use client'

import { useBlogHook } from "@/Context/Context";
import { cherry, jersey, poppins} from "@/utils/helper";
import SideImg from "../SideImg/SideImg";

function ThreeContent() {
    const {sanityData} = useBlogHook();
        const {infoheading,infoparagraph,infosubheading} = sanityData.homeSan;
  return (
    <div className="relative flex flex-col gap-3 bg-slate-200 px-8 py-14 bg-gradient-to-t from-slate-300 border-b-4  max-[900px]:w-[410px] max-[800px]:w-[380px] max-[710px]:py-9 max-[690px]:w-[340px] max-[630px]:px-3 max-[630px]:w-[320px] max-[620px]:w-[450px] max-[620px]:py-14 max-[620px]:px-8 max-[470px]:px-4 max-[470px]:w-[430px] max-[440px]:w-[370px] max-[380px]:w-[330px] max-[340px]:w-[300px] max-[340px]:px-2 max-[310px]:w-[270px] max-[280px]:w-[250px]">
        <div className="border-b-2 border-slate-500 pb-2 max-[900px]:w-[340px] max-[690px]:w-[300px] max-[620px]:w-[400px] max-[440px]:w-[335px] max-[380px]:w-[300px] max-[340px]:w-[280px] max-[310px]:w-[240px]  ">
      <h6 className={`${jersey.className} text-lg bg-slate-100 p-2 max-[900px]:text-[15px] max-[690px]:text-[13px] max-[620px]:text-lg max-[440px]:text-[14px] max-[380px]:text-[12px] max-[310px]:text-[13px]`}>{infosubheading}</h6>
        </div>
        <h3 className={`${cherry.className}  text-2xl`}>{infoheading}</h3>
        <p className={`w-[400px] ${poppins.className} text-[14px] max-[900px]:text-[13px] max-[900px]:w-[370px] max-[800px]:text-[12px] max-[800px]:w-[340px] max-[690px]:text-[10px] max-[690px]:w-[300px] max-[620px]:w-[400px] max-[440px]:w-[350px] max-[380px]:w-[320px] max-[340px]:text-[8px] max-[340px]:w-[280px] max-[310px]:w-[250px] max-[280px]:w-[230px]`}>{infoparagraph}</p>
    <SideImg/>
    </div>
  )
}

export default ThreeContent
