import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import StarWrapper from "../sectionWrapper/sectionWrap";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  links
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    whileInView={{ y: [50, 0], opacity: [0, 1], transition:{duration:0.5} }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-700 p-4 mt-7 rounded-2xl h-[430px] sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[180px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <div className="flex justify-between">
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <div className="flex gap-2">
              {links.map((lnk) => (
                <img 
                className="neon-button w-10 h-10 cursor-pointer rounded-full"
                onClick={() => window.open(lnk.src, "_blank")}
                src={lnk.icon}
                alt="link"
                />
              ))}
            
            </div>
          </div>
          <p className='mt-3 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-3 items-end absolute inset-x-0 bottom-0 pl-5 pb-2 pt-2'>
          {tags.map((tag) => (
            <img 
            className="w-10 h-10"
            src={tag.icon}/>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      {/* <div className='w-full flex'>
        <p
          
          className='mt-3 text-slate-500 text-[17px] max-w-3xl leading-[30px]'
        >
         
        </p>
      </div> */}

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Works, "projects");