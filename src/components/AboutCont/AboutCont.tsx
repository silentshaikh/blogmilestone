import React from 'react'
import AboutContent from '../AboutContent/AboutContent'
import AboutImg from '../AboutImg/AboutImg'
import AboutMoreContent from '../AboutMoreContent/AboutMoreContent'

function AboutCont() {
  return (
    <section className='pt-32 flex justify-center items-center flex-col gap-10 bg-[#7efff5] '>
      <AboutContent/>
      <AboutImg/>
      <AboutMoreContent/>
    </section>
  )
}

export default AboutCont
