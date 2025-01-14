'use client';

import { useBlogHook } from "@/Context/Context";

function CommentForm() {
    const {commValue,onComChang,onHandleComment} = useBlogHook();
  return (
    <form action='' className='flex flex-col gap-6' onSubmit={onHandleComment}>
      <label htmlFor="" className='text-2xl'>What’s on Your Mind?</label>
      <textarea className='w-[700px] p-3 resize-none rounded-lg outline-none bg-slate-100 max-[730px]:w-[600px] max-[630px]:w-[500px] max-[530px]:w-[400px] max-[430px]:w-[350px] max-[370px]:w-[300px] max-[320px]:w-[270px] max-[280px]:w-[240px]' name="" id="" rows={5} placeholder='Enter Your Comment' value={commValue} onChange={(e) => onComChang(e.target.value)}></textarea>
      <button className='bg-teal-200  py-3 px-8 rounded-md hover:animate-pulse w-[160px] max-[500px]:px-2 max-[500px]:w-[130px] max-[300px]:w-[100px] max-[300px]:text-sm'>Post Comment</button>
    </form>
  )
}

export default CommentForm;
