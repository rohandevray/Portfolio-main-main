import { motion } from "framer-motion";
import { contacts } from "../constants";
import { styles } from "../styles";
import Lottie from "react-lottie";
import lottieAnimation from "../assets/lottiefiles/lottie.json"
const Hero = (props) => {

  const defaultOptions = {
    loop : true,
    autoplay : true,
    animationData : lottieAnimation,
  }

  const { light} = props;
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1], transition:{duration : 1}}}
        className={`absolute inset-0 top-[130px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row gap-10`}
      >

        <div className="mt-[5%]">
          <h1 className={`${styles.heroHeadText} ${
                light? "text-zinc-500" : "text-white"
              }`}>
            Hi, I'm <span className='text-[#915EFF]'>Rohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ${
                light? "text-gray-700" : "text-white"
              }`}>
            A web <span className='text-[#915EFF]'>Dev</span>eloper and programmer.
          </p>
          
          <div className="flex flex-col mt-7 pt-8 pb-8">
            <ul className='list-none flex flex-row'>
              {contacts.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => setActive(nav.title)}
                >
                  <button className="neon-button rounded-full m-1.5 w-7 h-7 sm:w-10 sm:h-10 bg-white">
                    <img 
                      className="w-full h-full, p-1" 
                      src={nav.icon} 
                      alt="img" 
                      onClick={() => window.open(nav.link, "_blank")}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <a className="rounded-full bg-[#915EFF]  hover:bg-violet-600 px-5 py-2 font-semibold" href="#contact">Let's connect</a>
        </div>
         
        <div className="mx-auto h-56 md:h-auto pointer-events-none my-auto">
          <Lottie
             options={defaultOptions}
          />
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;