import { jersey, poppins } from '@/utils/helper'


function BlogDetailSkill({name,detailOne,detailTwo}:{name:string,detailOne:string,detailTwo:string}) {
  return (
    <div className={`${poppins.className} flex flex-col item-center gap-5`}>
      <h3 className={`${jersey.className} uppercase text-5xl bg-teal-200 py-2 px-4 max-[820px]:w-[600px] max-[650px]:w-[450px] max-[500px]:text-4xl max-[500px]:w-[340px] max-[400px]:text-3xl max-[400px]:w-[280px] max-[310px]:text-2xl max-[310px]:w-[230px]`}>what&apos;s the {name} ?</h3>
      <div className='text-[14px] w-[800px] flex flex-col gap-3 bg-[#7efff5] p-3 text-gray-400 max-[820px]:w-[98%]'>
 <p className=''>{detailOne}</p>
 <p>{detailTwo}</p>
      </div>
    </div>
  )
}

export default BlogDetailSkill
