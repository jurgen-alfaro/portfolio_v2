import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 65 }}
        viewport={{ once: true }}
        className="mt-24 md:mt-0"
      >
        <Image
          src={assets.profile_pic}
          alt="Profile image"
          className="rounded-full w-44 h-44 object-none object-[52%_31%]"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-xl text-text-primary dark:text-text-primary-dark md:text-2xl mb-3 font-poppins"
      >
        Hi! I'm Jurgen Alfaro{' '}
        <Image src={assets.hand_icon} alt="Hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-poppins "
      >
        Software Engineer based in Costa Rica
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-lg"
      >
        I'm a Software Engineer from the "Pura Vida" paradise, Costa Rica.
        <br />
        With over 10 years of experience in technical support and customer
        service for global clients, and 3+ years building web applications as a
        freelance developer.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full duration-200 bg-background-dark text-white flex items-center gap-2 hover:bg-accent dark:bg-transparent dark:hover:bg-accent-dark"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow icon"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#work"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My projects
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
