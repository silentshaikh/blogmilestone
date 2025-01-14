'use client';

import { useBlogHook } from "@/Context/Context";
import { jersey } from "@/utils/helper";

function CommentAlert() {
    const {commAlert,handleCommentAlert} = useBlogHook();
  return (
        <div className={`${jersey.className} bg-[#CCFBF1] w-72 ${commAlert ? 'flex' :'hidden'} flex-col items-center gap-4 z-10 py-9 fixed left-[40%] border-4 border-[#9AECDB] border-dashed top- transition-opacity `}>             
          <h2 className='text-3xl'>Please Fill the field</h2>
          <button className='bg-teal-200  py-2 px-6 rounded-md hover:animate-pulse' onClick={handleCommentAlert}>OK</button>
        </div>
  )
}

export default CommentAlert
