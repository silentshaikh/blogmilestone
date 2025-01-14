'use client';
import { useBlogHook } from '@/Context/Context'
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
    const {sanityData} = useBlogHook();
    const {logo} = sanityData.headerSan;
  return (
    <Link href={`/`}>
    <div>
      <Image className='size-[70px]' src={logo} alt='Logo' height={50} width={50} />
    </div>
    </Link>
  )
}

export default Logo
