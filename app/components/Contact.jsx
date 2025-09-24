import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Contact = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append('access_key', '6489995d-740e-4b5e-a114-faa4533fe620');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        event.target.reset();
        clearResultAfterDelay(3000);
      } else {
        console.error('Error', data);
        setResult(`${data.message}`);
        clearResultAfterDelay(5000);
      }
    } catch (error) {
      console.error('Network error', error);
      setResult('Something went wrong. Please try again.');
      clearResultAfterDelay(5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearResultAfterDelay = (delay) => {
    setTimeout(() => {
      setResult('');
    }, delay);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-surface-dark dark:border-white/90"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-surface-dark dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-surface-dark dark:border-white/90"
        ></motion.textarea>

        <motion.button
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-background-dark text-white rounded-full mx-auto hover:bg-accent duration-200 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-accent-dark
        "
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit now'}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow white"
            className="w-4"
          />
        </motion.button>
      </motion.form>
      <AnimatePresence mode="wait">
        {result && (
          <motion.p
            key="form-result"
            className="mt-4 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {result}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
