import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import { AiOutlineMail } from 'react-icons/ai';
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center space-x-6"
      >
        <a target="blanc" href="https://www.facebook.com/a7mdmo74">
          <FaFacebookF className="text-2xl" />
        </a>
        <a target="blanc" href="https://www.linkedin.com/in/a7mdmo74/">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a target="blanc" href="https://github.com/a7mdmo74">
          <FaGithub className="text-2xl" />
        </a>
        <a target="blanc" href="https://www.freecodecamp.org/a7mdmo74">
          <FaFreeCodeCamp className="text-2xl" />
        </a>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-4"
      >
        <AiOutlineMail className="text-2xl" />
        <p className="hidden md:inline-flex uppercase text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
