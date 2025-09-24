import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = ({ isDarkMode }) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-poppins">
        What I can help you with
      </h4>
      <h2 className="text-center text-5xl font-poppins mb-32">My services</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
      >
        {serviceData.map(
          ({ icon, darkIcon, title, description, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 transition-all duration-400 ease-in-out transform hover:shadow-lg hover:-translate-y-1  dark:hover:shadow-white"
            >
              <Image
                src={isDarkMode ? darkIcon : icon}
                alt="Service icon"
                className="w-8"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
              {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more{' '}
                <Image
                  src={assets.rightArrow}
                  alt="Right arrow"
                  className="w-4"
                />
              </a> */}
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Services;
