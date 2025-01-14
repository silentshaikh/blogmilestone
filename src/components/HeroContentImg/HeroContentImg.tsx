'use client';

import { useBlogHook } from "@/Context/Context";
import Image from "next/image";

function HeroContentImg() {
  const {sanityData,onSelectImg} = useBlogHook();
  const {imglist} = sanityData.homeSan;
  return (
    <div className='flex gap-3 bg-white p-1'>
      {
        imglist.map((e,i) => {
          return(
            <Image key={e.id} className="size-[60px] border-2 cursor-pointer  border-lime-50" src={e.imgurl} alt="heroimg" onClick={() => onSelectImg(i)} height={100} width={100}/>
          )
        })
      }
    </div>
  )
}

export default HeroContentImg
