'use client';
import FormLabel from '../FormLabel/FormLabel'
import FormInput from '../FormInput/FormInput'
import { useBlogHook } from '@/Context/Context';
import FormTextarea from '../FormTextarea/FormTextarea';
import { jersey } from '@/utils/helper';

function ContactForm() {
    const {formInput} = useBlogHook();
  return (
    <form action='' className='flex flex-col gap-4 pb-10 max-[630px]:items-center'>
      <FormLabel name='user name'/>
      <FormInput name='username' value={formInput.username} place='Enter You Name'/>
      <FormLabel name='user email'/>
      <FormInput name='useremail' value={formInput.useremail} place='Enter You Email'/>
      <FormLabel name='user number'/>
      <FormInput name='usernumber' value={formInput.usernumber} place='Enter You Number'/>
      <FormLabel name='user message'/>
      <FormTextarea name='usermessage' value={formInput.usermessage} place='Enter You Mesage'/>
        <button className={`button-54 ${jersey.className} w-[100px] outline-none`}>Submit</button>
    </form>
  )
}

export default ContactForm
