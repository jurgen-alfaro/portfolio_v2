'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex py-4 items-center justify-between z-50 transition duration-400 ${
          isScroll
            ? 'bg-surface backdrop-opacity-50 backdrop-blur-lg shadow-sm dark:bg-surface-dark dark:shadow-white/20'
            : ''
        }`}
      >
        <a href="/#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-32 cursor-pointer mr-14 rounded-xl"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition duration-400 ${
            isScroll
              ? ''
              : 'bg-white shadow-sm backdrop-opacity-40 dark:border dark:border-white/50 dark:bg-transparent'
          }  `}
        >
          <li>
            <a
              className="font-poppins hover:text-accent dark:hover:text-accent-dark"
              href="/#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-poppins hover:text-accent dark:hover:text-accent-dark"
              href="/#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-poppins hover:text-accent dark:hover:text-accent-dark"
              href="/#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-poppins hover:text-accent dark:hover:text-accent-dark"
              href="/#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-poppins hover:text-accent dark:hover:text-accent-dark"
              href="/#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={`${isDarkMode ? 'Sun' : 'Moon'} icon`}
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 hover:bg-accent dark:bg-transparent dark:text-white dark:hover:bg-accent-dark transition duration-200"
          >
            Contact{' '}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Contact button"
              className="w-3 cursor-pointer"
            />{' '}
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Moon icon"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-accent transition text-text-primary duration-500 dark:bg-accent-dark dark:text-background-dark font-poppins"
          ref={sideMenuRef}
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close icon"
              onClick={closeMenu}
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a
              onClick={closeMenu}
              className="font-poppin text-background hover:text-text-primary dark:hover:text-text-primary transition duration-200"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-poppins text-background hover:text-text-primary dark:hover:text-text-primary transition duration-200"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-poppins text-background hover:text-text-primary dark:hover:text-text-primary transition duration-200"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-poppins text-background hover:text-text-primary dark:hover:text-text-primary transition duration-200"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-poppins text-background hover:text-text-primary dark:hover:text-text-primary transition duration-200"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
