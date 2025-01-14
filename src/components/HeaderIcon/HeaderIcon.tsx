import React from 'react'
import { CiSearch } from 'react-icons/ci'

function HeaderIcon() {
  return (
    <div className='border-white  border-2 rounded-full p-1 cursor-pointer text-white hover:bg-white hover:text-[#7b84ff]'>
      <CiSearch className='text-xl  '/>
    </div>
  )
}

export default HeaderIcon
