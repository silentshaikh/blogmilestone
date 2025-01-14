'use client';
import { useBlogHook } from "@/Context/Context";
import { cherry} from "@/utils/helper";
import Image from "next/image";

function OwnBlogImg() {
    const {sanityData} = useBlogHook();
    const {newBlogImg,clickhere} = sanityData.homeSan;
  return (
    <div className=" flex flex-col gap-7 items-center max-[500px]:relative max-[500px]:-left-2 max-[400px]:pt-10 max-[400px]:left-0">
      <Image className="h-[250px] w-[600px] border-8 max-[660px]:w-[500px] max-[550px]:w-[450px] max-[480px]:w-[420px] max-[450px]:w-[400px] max-[430px]:w-[370px]  max-[380px]:w-[330px] max-[340px]:w-[280px] max-[290px]:w-[240px]" src={newBlogImg} alt="Create a New Blog" height={100} width={200}/>
      <button className={`${cherry.className}  text-3xl text-white max-[400px]:text-xl`}>{clickhere}</button>
    </div>
  )
}

export default OwnBlogImg
