import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-2 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 font-semibold text-3xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/about.jpg"
        className="-mb-40 md:-mb-28 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-5 px-0 md:px-10 mt-20 md:mt-0">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          I'm Ahmed Muhammad. You might also know me as a7mdmo74, here is a bit
          about me...I've been coding for over 3 years now. As a front end
          developer I've been worked with startups companies to help build &
          scale their companies. I studied CompSci at Mansoura University, I'm a
          very passionate, Fast learner, and dedicated to my work. I enjoy every
          step of the design process, from discussion and collaboration. You
          should hire me!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
