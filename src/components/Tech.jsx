import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { webd, lang, tools } from "../constants";
import StarWrapper from "../sectionWrapper/sectionWrap";

import {textVariant } from "../utils/motion";

const TechCard = ({ key, index, title, icon }) => (
    <div
      key={title}
      className='p-[1px] rounded-[20px] shadow-card'
    >
      <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-700 rounded-[20px] md:w-[90px] md:h-[90px]  h-[70px] w-[70px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='h-[30px] w-[30px]  md:w-[50px] md:h-[50px] object-contain'
        />

        <h3 className='text-white text-[10px] font-bold text-center'>
          {title}
        </h3>
      </div>
      </Tilt>
    </div>
);

const Tech = () => {
  return (
    <>
      <motion.div className="content-center" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack</h2>
      </motion.div>

      <div className="sm:flex md:flex-row mt-12 items-start">
        <div className="m-3 max-w-sm">
          <h4 className={`${styles.sectionSubText} text-start m-3`}>⚡WEb-Development</h4>
          <div className='flex flex-wrap gap-3'>
            {webd.map((webd, index) => (
              <TechCard key={webd.title} title = {webd.name} icon= {webd.icon} index={index} {...webd} />
            ))}
          </div>
        </div>

        <div className="m-3 max-w-sm">
          <h4 className={`${styles.sectionSubText} text-start m-3`}>⚡Tools</h4>
          <div className='flex flex-wrap gap-3'>
            {tools.map((tools, index) => (
              <TechCard key={tools.title} title = {tools.name} icon= {tools.icon} index={index} {...tools} />
            ))}
          </div>
        </div>
        
        <div className="m-3 max-w-sm">
          <h4 className={`${styles.sectionSubText} text-start m-3`}>⚡Language</h4>
          <div className='flex flex-wrap gap-3'>
            {lang.map((lang, index) => (
              <TechCard key={lang.title} title = {lang.name} icon= {lang.icon} index={index} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StarWrapper(Tech, "tech");