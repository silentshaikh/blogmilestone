import { jersey } from '@/utils/helper'
import React from 'react'

function FormLabel({name}:{name:string}) {
  return (
    <>
     <label htmlFor="" className={`uppercase ${jersey.className} text-xl `}>{name}</label> 
    </>
  )
}

export default FormLabel
