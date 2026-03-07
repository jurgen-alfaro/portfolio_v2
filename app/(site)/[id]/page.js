'use client';

import { workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function ProjectDetail() {
  const params = useParams();
  const project = workData.find((p) => p.slug === params.id);

  // Carousel state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    // Only run if screenshots exist and not paused
    if (!project?.screenshots || project.screenshots.length <= 1 || isPaused) {
      return;
    }

    // Set up interval for auto-advance
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
    }, 4000);

    // Cleanup on unmount or dependency change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [project?.screenshots, isPaused, currentSlide]);

  // Navigation handlers
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    if (!project?.screenshots) return;
    setCurrentSlide((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    if (!project?.screenshots) return;
    setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
  };

  if (!project) {
    return (
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 p-10 ">
        <p className="text-xl font-poppins">Project not found</p>
        <Link
          href="/#work"
          className="text-primary hover:text-accent transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-11/12 max-w-5xl min-h-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-sm font-montserrat"
        >
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href="/#work"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white">{project.title}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent/20 dark:bg-accent/30 text-accent-dark dark:text-accent rounded-full text-xs font-medium font-montserrat">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium font-montserrat">
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {project.client && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-montserrat">
              For {project.client}
            </p>
          )}

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-montserrat leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium font-montserrat hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium font-montserrat hover:bg-primary/90 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Live Demo
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-dark rounded-lg font-medium font-montserrat hover:bg-accent/90 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Quick Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 bg-gray-100 dark:bg-gray-800/50 rounded-xl"
        >
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-montserrat">
              Role
            </p>
            <p className="font-semibold text-gray-900 dark:text-white font-poppins">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-montserrat">
              Duration
            </p>
            <p className="font-semibold text-gray-900 dark:text-white font-poppins">
              {project.duration}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-montserrat">
              Status
            </p>
            <p className="font-semibold text-gray-900 dark:text-white font-poppins">
              {project.status}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-montserrat">
              Category
            </p>
            <p className="font-semibold text-gray-900 dark:text-white font-poppins">
              {project.category}
            </p>
          </div>
        </motion.div>

        {/* The Problem Section */}
        {project.problem && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
              The Problem
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-montserrat leading-relaxed">
              {project.problem}
            </p>
          </motion.section>
        )}

        {/* The Solution Section */}
        {project.solution && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
              The Solution
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-montserrat leading-relaxed">
              {project.solution}
            </p>
          </motion.section>
        )}

        {/* Key Features Section */}
        {project.features && project.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-montserrat">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex justify-start items-center gap-6 flex-wrap">
            {project.techStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 relative group">
                  <Image
                    src={item}
                    alt="technology icon"
                    fill
                    className="object-contain border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 transition-all group-hover:border-primary dark:group-hover:border-primary group-hover:shadow-lg dark:bg-white/95"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Full Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-montserrat leading-relaxed">
            {project.details}
          </p>
        </motion.section>

        {/* Screenshots Carousel or Single Image */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900 dark:text-white">
              Screenshots
            </h2>

            <div
              className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-800"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides Container */}
              <div className="relative aspect-video">
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    style={{
                      pointerEvents: index === currentSlide ? 'auto' : 'none',
                    }}
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Previous Button */}
              {project.screenshots.length > 1 && (
                <button
                  onClick={goToPrevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
                  aria-label="Previous screenshot"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {project.screenshots.length > 1 && (
                <button
                  onClick={goToNextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
                  aria-label="Next screenshot"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

              {/* Slide Indicators */}
              {project.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75 w-2'
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ) : (
          /* Fallback: Show bgImage if no screenshots */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div
              className="w-full aspect-video bg-cover bg-center rounded-xl shadow-2xl"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
          </motion.div>
        )}

        {/* Call-to-Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900 dark:text-white">
            Interested in this project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-montserrat">
            Check out the{' '}
            {project.links.github ? 'source code' : 'other projects'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium font-montserrat hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View on GitHub
              </a>
            )}
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium font-montserrat hover:bg-primary hover:text-white transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
