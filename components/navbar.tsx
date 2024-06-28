'use client'
import React, { useEffect } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiGalleryView } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { FiMoon, FiSun } from "react-icons/fi";

const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];

const Navbar: React.FC = () => {
  const { activeSection, setActiveSection, theme, toggleTheme } = useAppContext();

  const handleNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setActiveSection(section), 100);
  };

  const handleScroll = (event: WheelEvent) => {
    const currentIndex = sections.indexOf(activeSection);
    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      handleNavClick(sections[currentIndex + 1]);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      handleNavClick(sections[currentIndex - 1]);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <motion.nav
        className={`flex justify-between items-center fixed left-0 right-0 mx-auto bottom-16 w-80 shadow-sm border px-4 py-1 rounded-full ${theme === 'light' ? 'bg-[#2e071c] text-white' : 'bg-white text-[#2e071c] border-2 border-[#2e071c]'}`}
        role='navigation'
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50, duration: 0.1 }}
      >
        <ul className='flex justify-between items-center w-full relative'>
          <motion.div
            className={`absolute h-full w-1/5 ${theme === 'light' ? 'bg-white' : 'bg-[#2e071c]'} rounded-full`}
            layout
            transition={{ type: 'spring', stiffness: 50, duration: 0.1 }}
            style={{ left: `${sections.indexOf(activeSection) * 20}%` }}
          />
          {sections.map((id) => (
            <motion.li
              key={id}
              className={`flex justify-center items-center cursor-pointer w-1/5 p-2 z-10`}
              onClick={() => handleNavClick(id)}
              animate={{ color: activeSection === id ? (theme === 'light' ? '#2e071c' : 'white') : theme === 'light' ? '#ffffff' : '#2e071c' }}
              transition={{ color: { duration: 0.1 } }}
            >
              {iconForSection(id)}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-12 py-2 px-4 rounded-full ${theme === 'light' ? 'bg-[#2e071c]' : 'bg-white'}`}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <div className='text-white flex justify-center items-center gap-4'><span>Dark</span><FiMoon /></div> : <div className='text-[#2e071c] flex justify-center items-center gap-4'><span>Light</span><FiSun /></div>}
      </button>
    </>
  );
}

const iconForSection = (section: string) => {
  switch (section) {
    case 'hero':
      return <AiFillHome size={22} />;
    case 'about':
      return <BiSolidUser size={22} />;
    case 'services':
      return <MdOutlineMiscellaneousServices size={22} />;
    case 'portfolio':
      return <RiGalleryView size={22} />;
    case 'contact':
      return <IoMdContacts size={22} />;
    default:
      return null;
  }
};

export default Navbar;
