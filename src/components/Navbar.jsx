import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { light, onLightChange } = props;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1G9yUiMfBFVt9nO3vMCk8Pni9klvV2t7R/view?usp=sharing');
  };

  return (
    <motion.nav
    initial = {{y : -50}}
    animate={{
      y: 0,
    }}
    transition = {{
      duration : 1
    }}
      className={`${
        styles.paddingX
      } w-full flex items-center pt-5 pb-5 fixed top-0 z-50 ${
        scrolled ? "bg-gray-700" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={`
              ${
                light && scrolled? "text-white" : null
              }
              ${
                !light && !scrolled? "text-white" : null
              }
              ${
                !light && scrolled? "text-white" : null
              }
              ${
                light && !scrolled? "text-slate-600" : null
              }
            hover:text-fuchsia-600 text-[20px] font-bold cursor-pointer flex`}>
            Rohan
          </p>
        </Link>

        <div className="flex">
            <div className="mx-5 cursor-pointer" onClick={onLightChange}>
                {
                  light? <DarkModeIcon className={`${
                    scrolled? "text-white-100" : "text-gray-800"
                  }`}/> : <LightModeIcon className="text-amber-400"/>
                }
            </div>
          <ul className='list-none hidden md:flex flex-row gap-5'>
          <p
            onClick={openResume}
            className={`
              ${
                light && scrolled? "text-white" : null
              }
              ${
                !light && !scrolled? "text-white" : null
              }
              ${
                !light && scrolled? "text-white" : null
              }
              ${
                light && !scrolled? "text-slate-700" : null
              }
              hover:text-fuchsia-600 text-[16px] font-medium cursor-pointer my-auto mr-1.5`}
              >Resume</p>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
                ${
                  light && scrolled? "text-white" : null
                }
                ${
                  !light && !scrolled? "text-white" : null
                }
                ${
                  !light && scrolled? "text-white" : null
                }
                ${
                  light && !scrolled? "text-slate-700" : null
                }
              hover:text-fuchsia-600 text-[16px] font-medium cursor-pointer my-auto`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
       
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <span
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? <MenuIcon className={`${
                    scrolled? "text-white-100" : "text-[#915EFF]"
                  }`}/> : <CloseIcon className={`${
                    scrolled? "text-white-100" : "text-[#915EFF]"
                  }`}/>}
          </span>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-16 right-[5%] mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-2'>
            <p
            onClick={openResume}
            className={`font-poppins font-medium cursor-pointer text-[16px] text-purple-400`}
              >Resume</p>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-purple-400"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;