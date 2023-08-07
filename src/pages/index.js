import Lottie from 'react-lottie-player'
import AuthAnimation from '../../public/assets/animations/auth-page-animation.json'
import useForm from '@/hooks/useForm'
import { useMemo } from 'react'


const HomePage = () => {

  const {form, onChangeHandler} = useForm({
    email: '',
    password:'',
  })

  const submitHandler = async(e) => {
    e.preventDefault();
  }

  const isDisabled = useMemo(() => {
    const isFormCorrect = Object.values(form).every((val)=>!val)
  },[form])

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#FAFAFA]'>
      <div className='flex h-4/5 w-4/5'>
        <div className='w-full h-full'>
          <Lottie play loop animationData={AuthAnimation} className='w-full h-full' />
          </div>
        <div className='w-full bg-white border border-gray-300 p-10'>
          <form onSubmit={submitHandler} className='flex flex-col items-center space-y-5'>
            <div className='tracking-wider text-5xl my-5'>Instagram</div>
            <input type='email' name='email' id='email' onChange={onChangeHandler} value={form.email} className='bg-gray-100 hover:bg-transparent focus:bg-transparent border px-2 py-1 placeholder:text-sm outline-none w-full rounded-sm focus:border-gray-400' placeholder='Email' />
            <input type='password' name='password' id='password' onChange={onChangeHandler} value={form.password} className='bg-gray-100 hover:bg-transparent focus:bg-transparent border px-2 py-1 placeholder:text-sm outline-none w-full rounded-sm focus:border-gray-400' placeholder='Password' />
            <button type='submit' className='bg-[#0095F6] py-2 px-6 text-white active:scale-95 transform transition w-full' disabled={isDisabled}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage
