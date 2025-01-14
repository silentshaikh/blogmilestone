'use client';
import { useBlogHook } from '@/Context/Context';
import { CgMenuRight } from 'react-icons/cg'

function HeaderTogg() {
  const {onHandleNavList} = useBlogHook();
  return (
    <div className='cursor-pointer hidden max-[650px]:flex' onClick={onHandleNavList}>
      {/* <CgMenuBoxed className='text-xl' /> */}
      {/* <HiOutlineMenuAlt2  className='text-3xl text-white' /> */}
      {/* <RiMenu3Line className='text-3xl text-white' /> */}
      <CgMenuRight className='text-3xl text-white' />
    </div>
  )
};
export default HeaderTogg;