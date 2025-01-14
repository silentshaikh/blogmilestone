'use client';

import { useBlogHook } from "@/Context/Context";
import { cherry, jersey } from "@/utils/helper";
import Image from "next/image";

function SideImg() {
    const {sanityData} = useBlogHook();
    const {sideImg} = sanityData.homeSan
  return (
    <div className={`${jersey.className} absolute left-[350px] bottom-72 max-[800px]:left-[300px] max-[710px]:bottom-60 max-[690px]:left-[250px] max-[690px]:bottom-56 max-[620px]:bottom-64 max-[340px]:left-[230px] max-[310px]:left-[200px] max-[280px]:left-[180px]`}>
      <Image className="h-[80px] w-[200px] " src={sideImg} alt="'book-img" height={100} width={100} />
      <h4 className={`${cherry.className} absolute bottom-5 left-[50px] text-2xl max-[900px]:left-5 max-[800px]:left-8 max-[690px]:left-9 max-[630px]:left-6 max-[620px]:left-24 max-[440px]:left-14 max-[380px]:left-8 max-[340px]:left-6`}>X</h4>
    </div>
  )
}

export default SideImg
