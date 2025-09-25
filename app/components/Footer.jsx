'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-20 mx-[10%] ">
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ transformOrigin: 'center' }}
        className="border-t border-gray-400"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Image
          src={assets.logo}
          alt=""
          className="w-36 mx-auto mb-2 rounded-xl"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_dark : assets.mail}
            alt="mail_icon"
            className="w-7"
          />
          <a href="mailto:dev.jurgen.alfaro@gmail.com">
            dev.jurgen.alfaro@gmail.com
          </a>
        </div>
      </motion.div>

      <div className="text-center sm:flex items-center justify-between  py-6">
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Jurgen Alfaro
        </motion.p>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
        >
          <motion.li variants={itemVariants}>
            <a href="https://github.com/jurgen-alfaro" target="_blank">
              Github
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/jurgen-alfaro-morera-ba3084185/"
              target="_blank"
            >
              LinkedIn
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Footer;
