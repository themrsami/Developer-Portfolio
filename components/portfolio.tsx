'use client';
import React from 'react'
import { useAppContext } from '@/context/AppContext';

const Portfolio = () => {
  const { theme } = useAppContext();
  const backgroundImage = theme === 'dark' ? "url('./bgdark.jpg')" : "url('./bglight.jpg')";
  return (
    <div className='flex flex-col justify-center items-center mx-auto h-screen' style={{ 
      backgroundImage, 
      transition: 'background-image 0.5s ease-in-out' 
    }}>
      Portfolio
    </div>
  )
}

export default Portfolio