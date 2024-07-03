import React, {useRef} from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Loading-animation.json';
import Particle from './Particles'

const Preloader = () => {
  return (
    <div className='h-full w-full fixed inset-0 flex items-center justify-center z-50'>
      <Particle />
      <Lottie animationData={animationData} />
    </div>
  )
}

export default Preloader;
