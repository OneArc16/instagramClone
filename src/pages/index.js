import Lottie from 'react-lottie-player'
import AuthAnimation from '../../public/assets/animations/auth-page-animation.json'

const HomePage = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex h-4/5 w-4/5'>
        <div className='w-full'>
          <Lottie play loop animationData={AuthAnimation} className='w-full h-full' />
          </div>
        <div className='w-full bg-pink-300'>este es el otro div</div>
      </div>
    </div>
  )
}

export default HomePage
