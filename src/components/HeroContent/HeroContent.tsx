'use client';

import { useBlogHook } from "@/Context/Context";
import { jersey, poppins } from "@/utils/helper";
import PersonImg from "../PersonImg/PersonImg";

function HeroContent() {
  const {sanityData} = useBlogHook();
  const {buttonHero,mainHeading,paragraph,content} = sanityData.homeSan;
  return (

    <div className="relative flex flex-col items-start gap-5 bg-white p-9 w-[450px] max-[1000px]:w-[410px] max-[880px]:w-[400px] max-[820px]:w-[350px] max-[770px]:w-[600px] max-[620px]:w-[550px] max-[570px]:w-[500px] max-[530px]:w-[450px] max-[480px]:w-[400px] max-[440px]:w-[350px] max-[370px]:w-[96%]">
      <h1 className={`${jersey.className} text-4xl`}>{mainHeading}</h1>
      <p className={`${poppins.className} text-sm max-[1000px]:text-[13px]`}>{paragraph}</p>
      <p className={`${poppins.className} text-sm max-[1000px]:text-[13px]`}>{content}</p>
      <button className={`${jersey.className} bg-[#a9afff] p-3 rounded-full text-white hover:opacity-80 max-[300px]:text-sm`}>{buttonHero}</button>
      <PersonImg/>
    </div>
  )
}

export default HeroContent
