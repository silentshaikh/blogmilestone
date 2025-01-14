'use client';
import { useBlogHook } from '@/Context/Context';
import { jersey} from '@/utils/helper'

function BlogInput() {
  const {searchValue,onHandleSearch} = useBlogHook();
  return (
    <>
      <input className={`bg-teal-100 border-4 border-dashed border-teal-200 text-[13px] outline-none ${jersey.className} py-2 px-3 w-[600px] text-lg max-[870px]:w-[500px] max-[790px]:w-[400px] max-[670px]:w-[350px] max-[550px]:w-[300px] max-[370px]:w-[270px] max-[320px]:w-[250px] max-[290px]:w-[220px]`} type="search" name="" id="" value={searchValue} onChange={(e) => onHandleSearch(e.target.value)} placeholder='Search the Blog' />
    </>
  )
}

export default BlogInput
