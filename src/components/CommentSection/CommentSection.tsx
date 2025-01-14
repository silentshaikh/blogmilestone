import React from 'react'
import CommentForm from '../CommentForm/CommentForm'
import { jersey } from '@/utils/helper'
import CommentList from '../CommentList/CommentList';

function CommentSection() {
  return (
    <section className={`${jersey.className} flex justify-center items-center flex-col bg-[#A7F3D0] pt-12 pb-7`}>
        <CommentForm/>
        <CommentList/>
    </section>
  )
}

export default CommentSection;
