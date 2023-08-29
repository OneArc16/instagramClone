import Lottie from 'react-lottie-player'
import AuthAnimation from '../../../public/assets/animations/auth-page-animation.json'
import useForm from '@/hooks/useForm'
import { useContext, useMemo, useState } from 'react'
import {AiFillFacebook} from 'react-icons/ai';
import { GlobalContext, GlobalDispatchContext } from '@/state/context/GlobalContext';

const Auth = () => {

  const [isLoginForm, setIsLoginForm] = useState(false)

  const {isAuthenticated, isOnboarded, user, isLoading} = useContext(GlobalContext)

  const dispatch = useContext(GlobalDispatchContext)

  const {form, onChangeHandler} = useForm({
    email: '',
    password:'',
  })

  const submitHandler = async(e) => {
    e.preventDefault();
  }

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val)
  },[form])

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#FAFAFA]'>
      <div className='flex w-4/5 h-4/5'>
        <div className='w-full h-full'><Lottie play loop animationData={AuthAnimation} className='w-full h-full' /></div>

        <div className='flex flex-col w-full space-y-5'>
          <div className='flex flex-col w-full p-10 space-y-5 bg-white border border-gray-300'>
            <form onSubmit={submitHandler} className='flex flex-col items-center space-y-5'>
              <div className='my-5 text-5xl tracking-wider'>Instagram</div>
              <input type='email' name='email' id='email' onChange={onChangeHandler} value={form.email} className='w-full px-2 py-1 bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-gray-400' placeholder='Email' />
              <input type='password' name='password' id='password' onChange={onChangeHandler} value={form.password} className='w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-gray-400' placeholder='Password' />
              <button type='submit' className='bg-[#0095F6] py-1 text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold' disabled={isDisabled}>{isLoginForm ? 'Log In' : 'Sign Up'}</button>
            </form>
              <div className='flex items-center justify-center w-full my-5 space-x-2'>
                <div className='w-full bg-slate-400 h-[0.8px]' />
                <div className='text-sm font-semibold text-center text-gray-400'>OR</div>
                <div className='w-full bg-slate-400 h-[0.8px]' />
              </div>

              <div className='flex items-center justify-center w-full text-center text-indigo-900'>
                <AiFillFacebook className='inline-block mr-2 text-2xl' />
                <span className='text-sm font-semibold'>{isLoginForm ? 'Log In' : 'Sign Up'} with Facebook</span>
              </div>
              {isLoginForm && <div className='w-full text-xs text-center text-indigo-900'>Forgotten your password?</div>}
          </div>
          <div className='w-full py-5 space-y-5 text-sm text-center bg-white border border-gray-300'>{isLoginForm ? 'Don&apos;t have an account?' : 'Already haven an account'}
          <button onClick={() => setIsLoginForm((prev) => !prev)} className='ml-2 font-semibold text-indigo-600'>{isLoginForm ? 'Sign Up' : 'Login'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
