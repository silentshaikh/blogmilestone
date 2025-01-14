'use client'

import { cherry } from "@/utils/helper"

function MoreContent() {
  return (
    <div className={`${cherry.className} absolute left-[950px] top-80 flex justify-center gap-2 min-[1408px]:hidden max-[1230px]:left-[860px] max-[1230px]:gap-0 max-[1130px]:left-[810px] max-[1080px]:flex-col max-[1080px]:text-center max-[1080px]:gap-5 max-[1080px]:left-[230px] max-[1080px]:top-12 max-[960px]:left-[170px] max-[790px]:left-[100px] max-[680px]:left-[70px] max-[570px]:left-[40px] max-[450px]:left-2 max-[450px]:top-5 max-[320px]:hidden`}>
      <h3 className='transform rotate-90 text-3xl max-[1080px]:rotate-0 max-[450px]:text-2xl'>Create Your</h3>
      <h3 className='transform rotate-90 text-2xl max-[1080px]:rotate-0 max-[450px]:text-xl'>Best Blog</h3>
    </div>
  )
}

export default MoreContent
