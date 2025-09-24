'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = ['EN', 'ES', 'PT'];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSelect = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="font-bold px-2 py-1 cursor-pointer hover:underline rounded-md"
      >
        {currentLang}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 right-0 shadow-lg rounded-md border p-1 z-50 bg-surface dark:bg-background-dark"
          >
            {languages.map(
              (lang) =>
                lang !== currentLang && (
                  <motion.li
                    key={lang}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 cursor-pointer   hover:bg-accent hover:text-white rounded-md text-sm font-medium"
                    onClick={() => handleSelect(lang)}
                  >
                    {lang}
                  </motion.li>
                )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
