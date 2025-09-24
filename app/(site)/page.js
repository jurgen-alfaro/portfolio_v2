'use client';

import { useEffect } from 'react';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Contact from '@/app/components/Contact';
import Lenis from 'lenis';
import Projects from '@/app/components/Projects';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-background dark:bg-background-dark">
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}
