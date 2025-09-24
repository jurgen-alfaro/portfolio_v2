import { assets, infoList } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';

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
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const SkillsList = ({ isDarkMode }) => {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {infoList.map(({ icon, iconDark, title, description }, index) => (
        <motion.li key={index} className="space-y-2" variants={itemVariants}>
          <div className="flex items-center mt-5">
            <Image
              src={isDarkMode ? iconDark : icon}
              alt="Right arrow bold"
              className="w-5 h-4"
            />
            &nbsp;<h5 className="text-md">{title}</h5>
          </div>
          <p className="font-mono text-sm">{description}</p>
          <hr className="bg-accent-dark h-0.5 border-none max-w-2xl" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsList;
