'use client';
import { cherry, jersey } from '@/utils/helper'
import { usePathname, useRouter } from 'next/navigation'


function FooterBanner() {
  const navigContact = useRouter();
  const pathName = usePathname();
  return (
    <section className={` ${pathName === '/contact' ? 'hidden':''} bg-[#9AECDB] py-6 flex justify-center items-center gap-80 max-[770px]:gap-56 max-[660px]:gap-40 max-[540px]:gap-32 max-[500px]:gap-24 max-[470px]:gap-20 max-[450px]:gap-14 max-[430px]:gap-10 max-[420px]:gap-5 max-[400px]:flex-col`}>
      <h2 className={`${cherry.className} text-3xl max-[600px]:text-2xl`}>Want Contact With Us</h2>
      <button className={`${jersey.className} bg-teal-200  py-3 px-8 rounded-md hover:animate-pulse` } onClick={() => navigContact.push('/contact')}>Go There</button>
    </section>
  )
}

export default FooterBanner
