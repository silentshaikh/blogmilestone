import HeaderIcon from '../HeaderIcon/HeaderIcon'
import HeaderTogg from '../HeaderTogg/HeaderTogg'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header className='header rounded bg-[#7b84ff] flex justify-center items-center gap-20 py-2 fixed top-0 right-0 left-0 z-20 mx-10 my-4 max-[660px]:mx-5 max-[650px]:h-[10vh] max-[650px]:gap-40 max-[510px]:gap-32 max-[450px]:gap-28 max-[420px]:gap-20 max-[360px]:mx-2 max-[340px]:gap-12'>
      <Logo/>
      <Navbar/>
      <HeaderIcon/>
      <HeaderTogg/>
    </header>
  )
}

export default Header
