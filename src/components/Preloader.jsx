import React, {useRef} from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Loading-animation.json';
import Particle from './Particles'

const Preloader = ({ theme }) => {
  return (
    <div className={`h-full w-full fixed inset-0 flex items-center justify-center z-50 ${theme === 'black' ? 'bg-white' : 'bg-black'}`}>
      <Particle />
      <Lottie animationData={animationData} />
    </div>
  )
}

export default Preloader;
