'use client';
import { useBlogHook } from '@/Context/Context'
import Image from 'next/image';

function HeroBulb() {
    const {sanityData} = useBlogHook();
    const {bulbimg} = sanityData.homeSan;
  return (
    <>

    <div className="absolute top-24 z-10 left-0  max-[1230px]:top-20">
    {/* <!-- Bulb Image --> */}
    <Image
      src={bulbimg} 
      alt="Bulb"
      className=" size-[200px] max-[450px]:size-[160px]"
      height={100}
      width={100}
      />
      
  </div>
      
      </>
  )
};
export default HeroBulb;