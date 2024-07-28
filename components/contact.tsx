'use client'
import React, { ReactElement } from 'react';
import { useAppContext } from '@/context/AppContext';

const Contact = () => {
  const { theme } = useAppContext();

  const formStyles = `flex flex-col justify-center items-center w-64 h-80 bg-${theme}-500 bg-opacity-50 backdrop-blur`;

  const inputStyles = `w-full h-10 mb-4 px-2 rounded border border-gray-300 focus:outline-none`;

  const buttonStyles = `w-32 h-10 bg-${theme === 'dark' ? 'gray' : 'gray-300'} text-${theme === 'dark' ? 'white' : 'black'} rounded cursor-pointer focus:outline-none`;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={formStyles}>
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        <form className="flex flex-col items-center">
          <input type='text' placeholder='Name' className={inputStyles} />
          <input type='email' placeholder='Email' className={inputStyles} />
          <textarea placeholder='Message' className={`${inputStyles} h-32`} />
          <button type='submit' className={buttonStyles}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
