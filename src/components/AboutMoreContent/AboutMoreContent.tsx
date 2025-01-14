import { poppins } from '@/utils/helper'
import React from 'react'

function AboutMoreContent() {
  return (
    <div className={`${poppins.className} w-[800px] flex flex-col items-start gap-5 text-[14px] text-justify text-slate-400 pb-10 max-[820px]:w-[700px] max-[720px]:w-[600px] max-[620px]:w-[500px] max-[520px]:w-[400px] max-[450px]:text-[13px] max-[420px]:w-[300px] max-[320px]:w-[250px] `}>
      <p>Coding is more than just a skill—it’s a journey of discovery, creativity, and constant growth. At our blog, we believe every developer has the power to transform ideas into reality, and we’re here to guide you along the way. From tackling tough algorithms to exploring the latest tech trends, we’re your trusted partner in the world of code. Join us as we build, break, and innovate together, one project at a time!</p>
      <p>Code speaks a universal language, and here, we celebrate its power to connect people, ideas, and innovations. Our mission is to make coding approachable, fun, and empowering for everyone—no matter where you are in your journey. Through hands-on guides, expert tips, and community-driven content, we’re here to help you unlock your full potential and leave your mark on the digital world.</p>
      <p>In a world driven by technology, code is the engine powering the future—and you hold the keys. This blog is dedicated to equipping you with the tools, knowledge, and confidence to create solutions that matter. Together, we’ll navigate the complexities of code, celebrate the wins, and learn from the stumbles. After all, great developers aren’t born—they’re built, one line of code at a time.</p>
    </div>
  )
}

export default AboutMoreContent
