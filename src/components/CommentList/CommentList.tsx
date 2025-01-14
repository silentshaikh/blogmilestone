'use client';

import { useBlogHook } from "@/Context/Context";
import { cherry,rubik } from "@/utils/helper";
import CommentCard from "../CommentCard/CommentCard";

function CommentList() {
    const {sanityData} = useBlogHook();
    const {commentSan} = sanityData;
  return (
    <div className='flex flex-col items-center pt-10 gap-8'>
      <h3 className={`${rubik.className} text-4xl text-white max-[450px]:text-3xl`}>Comments (<span className={`${cherry.className} text-slate-300 text-4xl`}> {commentSan.length} </span>)</h3>
      <div className="flex flex-col items-center gap-5">
        {
            commentSan.map((e) => {
                return(
                    <CommentCard key={e.commentid} comment={e.comment} commentid={e.commentid} />
                )
            })
        }
      </div>
    </div>
  )
}

export default CommentList
