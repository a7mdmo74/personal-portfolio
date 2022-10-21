import { motion } from 'framer-motion';
import React from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiRedux, SiMaterialui, SiFramer } from 'react-icons/si';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
type Props = {};

const Skills = (props: Props) => {
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
        Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-16 text-6xl">
        <TbBrandNextjs title="NextJs" className="text-black" />
        <FaReact title="ReactJs" className="text-[#61DAFB]" />
        <SiRedux title="Redux" className="text-white" />
        <IoLogoJavascript title="JavaScript" />
        <SiTailwindcss title="tailwindcss" className="text-[#38BDF8]" />
        <SiMaterialui title="MUI" className="text-[#0063C6]" />
        <SiFramer title="Framer Motion" />
        <FaGit title="Git" />
        <FaGithub title="Github" />
        <BsFillBootstrapFill title="Bootstrap" className="text-[#7532F9]" />
        <IoLogoCss3 title="CSS3" className="text-blue-600" />
        <AiFillHtml5 title="HTML5" className="text-orange-500" />
      </div>
    </motion.div>
  );
};

export default Skills;
