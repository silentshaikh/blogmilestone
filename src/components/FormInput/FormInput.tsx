'use client';
import { useBlogHook } from '@/Context/Context';
import { teko } from '@/utils/helper';
import { InputTypes } from '@/utils/type'

function FormInput({name,place,value}:InputTypes) {
    const {onHandleInput} = useBlogHook();
  return (
    <>
     <input type="text" className={`${teko.className} w-[600px] px-3 py-3  outline-none  max-[630px]:w-[550px] max-[570px]:w-[500px] max-[520px]:w-[450px] max-[470px]:w-[420px] max-[440px]:w-[390px] max-[410px]:w-[360px] max-[380px]:w-[340px] max-[360px]:w-[300px] max-[320px]:w-[270px] max-[280px]:w-[250px]`} name={name} id="" value={value} placeholder={place} required  onChange={(e) => onHandleInput(e)}/> 
    </>
  )
}

export default FormInput;
