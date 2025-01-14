import { jersey, poppins } from '@/utils/helper'
import React from 'react'

function FooterForm() {
  return (
    <form action='' className={`${poppins.className} flex flex-col item-start gap-3 max-[745px]:item-center`}>
        <label htmlFor="" className={`${jersey.className} text-2xl max-[860px]:text-xl`}>Our Newsletter</label>
      <input type="text" className='w-72 py-1 px-4 text-sm outline-none bg-[#E5E7EB] border-4 border-dashed border-teal-200 max-[999px]:w-64 max-[935px]:w-52 max-[745px]:w-[400px] max-[430px]:w-[360px] max-[400px]:w-[320px] max-[350px]:w-[280px] max-[320px]:w-[250px] max-[290px]:w-[220px]' name="" id="" required placeholder='Enter Your Email' />
      <button className={`${jersey.className} outline-none  bg-teal-200 w-20 py-1 text-[#adaeaf]`}>Submit</button>
    </form>
  )
}

export default FooterForm
