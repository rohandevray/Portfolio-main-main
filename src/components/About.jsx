import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";


import { textVariant } from "../utils/motion";
import StarWrapper from "../sectionWrapper/sectionWrap";

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        whileInView={{ x: [-100, 0], opacity: [0, 1], transition:{duration:0.5} }}
        className='mt-4 text-slate-500 text-[20px] max-w-3xl leading-[30px]'
      >
        I am a versatile full-stack developer with a strong foundation in backend technologies, complemented by proficiency in frontend development. My tech stack includes Django, Python, ReactJS, AWS, and PostgreSQL, enabling me to build end-to-end web applications that are efficient, scalable, and user-friendly. Additionally, I have a keen interest in solving complex data structures and algorithms, which contributes to my ability to create robust and optimized solutions.
      </motion.p>
    </>
  );
};

export default StarWrapper(About, "about");