import { cherry, jersey} from '@/utils/helper'


function FooterLogo() {
  return (
    <div className='flex flex-col items-start '>
      <h2 className={`${cherry.className} text-5xl text-teal-300  px-1 max-[950px]:text-4xl`}>Codeese</h2>
      <p className={`${jersey.className} text-slate-300`}>Guide of Programming Languages</p>
    </div>
  )
}

export default FooterLogo
