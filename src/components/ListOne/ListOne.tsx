import { jersey, poppins } from "@/utils/helper"


function ListOne() {
  return (
    <div className='flex flex-col items-start '>
        <h3 className={`${jersey.className} text-2xl max-[860px]:text-xl`}>Tutorials</h3>
    <ul className={`${poppins.className} flex flex-col items-start text-[13px]`}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>NEXTJS</li>
    </ul>
    </div>
  )
}

export default ListOne
