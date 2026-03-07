import { workData } from '@/assets/assets';
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
        transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 px-4 sm:px-8"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-transparent cursor-pointer group"
          >
            {/* Image Wrapper with Badges */}
            <div className="relative">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white rounded-full text-xs font-medium font-montserrat shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Background image */}
              <div
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="aspect-[6/3] bg-no-repeat bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
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
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors font-poppins">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-montserrat">
                {project.description}
              </p>

              {/* Tech Stack Preview */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center -space-x-2">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      className="w-8 h-8 relative bg-white dark:bg-gray-800 rounded-full border-2 border-gray-200 dark:border-gray-700 p-1"
                    >
                      <Image
                        src={tech}
                        alt="tech icon"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
                {project.techStack.length > 4 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-montserrat">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
