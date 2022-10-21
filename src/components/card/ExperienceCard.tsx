import React from 'react';
import { motion } from 'framer-motion';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiRedux, SiMaterialui, SiFramer } from 'react-icons/si';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
type Props = {
  title: string;
  img: string;
  company: string;
  date: string;
};

const ExperienceCard = ({ title, img, company, date }: Props) => {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] py-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20 md:mt-12">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-36 h-36 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center transform !translate-y-0"
        src={img}
        alt={title}
      />
      <div className="px-10">
        <h4 className="text-2xl md:text-4xl font-light">{title}</h4>
        <p className="font-bold text-lg md:text-2xl mt-1">{company}</p>
        <p className="font-extralight textsm my-4">{date}</p>
        <div className="flex items-center space-x-4 space-y-2 text-3xl my-2 text-[#F7AB0A] justify-center flex-wrap">
          <TbBrandNextjs />
          <FaReact />
          <SiRedux />
          <IoLogoJavascript />
          <SiTailwindcss />
          <SiMaterialui />
          <SiFramer />
          <FaGit />
          <FaGithub />
          <BsFillBootstrapFill />
          <IoLogoCss3 />
          <AiFillHtml5 />
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
