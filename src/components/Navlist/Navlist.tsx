'use client';
import { useBlogHook } from '@/Context/Context'
import { jersey} from '@/utils/helper';
import Link from 'next/link';

function Navlist() {
    const {sanityData} = useBlogHook();
    const {navlist} = sanityData.headerSan;
  return (
    <ul className={`text-white flex ${jersey.className} gap-7 text-2xl uppercase max-[650px]:flex-col`}>
      {
        navlist.map((e) => {
            return(
                <li key={e._key} className='hover:animate-bounce'> <Link href={e.itemlink}>{e.listitem}</Link> </li>
            )
        })
      }
    </ul>
  )
}

export default Navlist
