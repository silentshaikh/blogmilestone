import React from 'react'
import ContactContent from '../ContactContent/ContactContent'
import ContactPara from '../ContactPara/ContactPara'
import { poppins } from '@/utils/helper'
import ContactForm from '../ContactForm/ContactForm'

function ContactCont() {
  return (
    <section className={`${poppins.className} flex flex-col items-center gap-6 pt-32 bg-yellow-50 `} >
      <ContactContent/>
      <ContactPara/>
      <ContactForm/>
    </section>
  )
}

export default ContactCont
