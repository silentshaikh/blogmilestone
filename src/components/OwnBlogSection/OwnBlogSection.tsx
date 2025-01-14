import React from 'react'
import OwnBlogContent from '../OwnBlogContent/OwnBlogContent'
import OwnBlogImg from '../OwnBlogImg/OwnBlogImg'
import NoteImg from '../NoteImg/NoteImg'
import MoreContent from '../MoreContent/MoreContent'

function OwnBlogSection() {
  return (
    <section className='relative bg-teal-300 flex flex-col gap-20 items-center pt-16 pb-8'>
      <OwnBlogContent/>
      <OwnBlogImg/>
      <NoteImg/>
      <MoreContent/>
    </section>
  )
}

export default OwnBlogSection
