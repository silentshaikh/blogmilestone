'use client';

import { useBlogHook } from "@/Context/Context";
import Image from "next/image";

function PersonImg() {
    const {sanityData} = useBlogHook();
    const {personImg} = sanityData.homeSan;
  return (
    <div className="absolute top-64 left-80 max-[1000px]:left-72 max-[880px]:top-72 max-[820px]:top-80 max-[770px]:top-48 max-[770px]:left-[500px] max-[620px]:left-[420px] max-[620px]:top-52 max-[570px]:left-[380px] max-[570px]:top-60 max-[530px]:left-[330px] max-[530px]:top-64 max-[480px]:left-[300px] max-[480px]:top-72 max-[440px]:left-[260px] max-[440px]:top-80 max-[330px]:left-[220px] max-[330px]:top-[335px] max-[310px]:left-[200px] max-[310px]:top-[358px] max-[299px]:left-[180px] max-[299px]:top-[395px]">
      <Image className="size-[130px] " src={personImg} alt="Person Image" height={100} width={100}/>
    </div>
  )
}

export default PersonImg
