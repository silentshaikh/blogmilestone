'use client'
import Navlist from '../Navlist/Navlist'
import { useBlogHook } from '@/Context/Context'

function Navbar() {
  const {showList} = useBlogHook()
  return (
    <nav className={` max-[650px]:bg-sky-300 max-[650px]:absolute max-[650px]:top-24 max-[650px]:text-center max-[650px]:px-24 max-[650px]:py-6 max-[650px]:shadow max-[650px]:transition-all ${showList ? 'max-[650px]:scale-100 max-[650px]:left-80 max-[630px]:left-72 max-[600px]:left-64 max-[580px]:left-60 max-[560px]:left-56 max-[540px]:left-52 max-[520px]:left-44 max-[490px]:left-40 max-[470px]:left-32 max-[450px]:left-3 max-[300px]:left-2 max-[290px]:w-[100%]' : 'max-[650px]:scale-50 max-[650px]:left-[700px]'}`}>
      <Navlist/>
    </nav>
  )
}

export default Navbar
