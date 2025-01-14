'use client';
import { useBlogHook } from '@/Context/Context';
import Image from 'next/image'
import HeroContentImg from '../HeroContentImg/HeroContentImg';


function HeroImg() {
  const {sanityData,images} = useBlogHook();
  const {imglist,heroImg} = sanityData.homeSan;
  // if(imglist){
    return (
      <div className='flex flex-col items-center gap-3'>
        <Image className={`h-[270px] w-[450px] border-lime-50 border-dashed border-[8px] p-2 ${images !== null ? 'animate-pulse' : ''} max-[1020px]:w-[400px] max-[880px]:w-[350px] max-[770px]:w-[570px] max-[620px]:w-[500px] max-[530px]:w-[430px] max-[480px]:w-[370px] max-[440px]:w-[340px] max-[370px]:w-[100%]`} src={images !== null ?imglist[images].imgurl: heroImg} alt='Hero Img' height={200} width={200} />
        {/* {
          imglist.map((e) => {
            return(
              <Image src={e.imgurl} alt='Hero Img' height={200} width={200} />
            )
          })
        } */}
         <HeroContentImg/>
      </div>
    )
  }
// }

export default HeroImg
