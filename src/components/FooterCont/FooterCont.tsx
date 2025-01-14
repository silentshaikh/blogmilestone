import FooterForm from "../FooterForm/FooterForm"
import FooterList from "../FooterList/FooterList"
import FooterLogo from "../FooterLogo/FooterLogo"


function FooterCont() {
  return (
    <div className="flex justify-center gap-64 border-b-2 pb-3 border-[#CED8E3] max-[1330px]:gap-40 max-[1130px]:gap-28 max-[1030px]:gap-24 max-[970px]:gap-20 max-[890px]:gap-16 max-[825px]:gap-10 max-[780px]:gap-6 max-[745px]:flex-col max-[745px]:items-center max-[320px]:items-start">
      <FooterLogo/>
      <FooterList/>
      <FooterForm />
    </div> 
  )
}

export default FooterCont
