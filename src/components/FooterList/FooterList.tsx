import React from 'react'
import ListOne from '../ListOne/ListOne'
import ListTwo from '../ListTwo/ListTwo'

function FooterList() {
  return (
    <div className='flex justify-center item-center gap-8 max-[745px]:gap-40 max-[430px]:gap-32 max-[400px]:gap-24 max-[370px]:gap-20 max-[350px]:gap-12 max-[320px]:flex-col max-[320px]:gap-4'>
      <ListOne/>
      <ListTwo/>
    </div>
  )
}

export default FooterList
