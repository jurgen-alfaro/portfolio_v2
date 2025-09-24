import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { toolsData } from '@/assets/assets';

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const ToolsList = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.ul
      className="flex items-center gap-3 sm:gap-5 flex-wrap max-w-2xl"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {toolsData.map(({ icon, displayName: name, iconDark }, index) => (
        <motion.li key={index} className="relative" variants={itemVariants}>
          <div
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg transition-all duration-400 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={isDarkMode ? iconDark : icon}
              alt={`Tool ${index}`}
              className="w-5 sm:w-7"
            />
          </div>

          {hoveredIndex === index && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-surface dark:bg-surface-dark text-text-primary dark:text-text-primary-dark text-xs rounded shadow-md z-10 font-poppins">
              {name}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface dark:bg-surface-dark rotate-45"></div>
            </div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ToolsList;
