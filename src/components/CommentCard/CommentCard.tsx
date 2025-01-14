'use client';
// import { jersey } from '@/utils/helper';
import { SanityComment } from '@/utils/type'
import Image from 'next/image'


function CommentCard({comment,commentid}:SanityComment) {
  return (
    <div key={commentid} className='flex justify-center items-start'>
      <Image className='max-[510px]:size-[40px] max-[410px]:size-[30px]' src='/images/balao-de-conversa_504017-32-removebg-preview.png' alt='comment' height={50} width={50}/>
      <p className='text-lg p-3 w-[600px] border-2 border-dashed break-words max-[670px]:w-[500px] max-[560px]:w-[450px] max-[510px]:w-[400px] max-[510px]:text-sm max-[450px]:w-[350px] max-[410px]:w-[300px] max-[350px]:w-[260px] max-[310px]:w-[230px] max-[275px]:w-[200px]'>{comment}</p>
    </div> 
  )
}

export default CommentCard
