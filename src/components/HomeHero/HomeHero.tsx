
import HeroBulb from '../HeroBulb/HeroBulb'
import HeroContent from '../HeroContent/HeroContent'
import HeroImg from '../HeroImg/HeroImg'


function HomeHero() {
  return (
    <section className='bg-[#e1e1f1] flex justify-center items-center gap-32 pt-48 pb-14 relative max-[1060px]:gap-20 max-[930px]:gap-10 max-[770px]:flex-col'>
      {/* <div className="flex flex-col"> */}
      <HeroBulb/>
      <HeroContent/>
     {/* <PersonImg/> */}
      {/* </div> */}
      <HeroImg/>
    </section>
  )
}

export default HomeHero
