import { jersey } from '@/utils/helper'
import { FaTwitter } from 'react-icons/fa'
import { PiInstagramLogoDuotone } from 'react-icons/pi'
// import { SlSocialInstagram } from 'react-icons/sl'
import { TfiYoutube } from 'react-icons/tfi'

function ListTwo() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className={`${jersey.className} text-2xl max-[860px]:text-xl`}>Join the Conversation</h3>
      <div className="flex justify-center items-center gap-5 py-2">
      <PiInstagramLogoDuotone className='text-[#FE025E] text-3xl'/>
      <TfiYoutube className='text-red-400 text-3xl'/>
      <FaTwitter className='text-sky-400 text-3xl' />
      </div>
    </div>
  )
}

export default ListTwo
