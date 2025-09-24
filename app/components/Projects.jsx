import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest work
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 px-4 sm:px-8"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            transition={{ type: 'spring', stiffness: 100 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-transparent cursor-pointer group"
          >
            {/* Image Wrapper */}
            <div className="relative">
              {/* Background image */}
              <div
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="aspect-[6/3] bg-no-repeat bg-cover bg-center transition-transform duration-500"
              ></div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href={`/${project.slug}`}
                  className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Content below image */}
            <div className="p-5 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {workData &&
        workData.length >
        (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            href=""
            className="w-max flex items-center justify-center gap-2 border-[0.5px] border-white rounded-full py-3 px-10 mx-auto my-20 bg-background-dark text-white duration-500 hover:bg-accent dark:bg-transparent dark:hover:bg-accent-dark"
          >
            Show more{' '}
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow bold"
              className="w-4"
            />{' '}
          </motion.a>
        )}
    </motion.div>
  );
};

export default Projects;
