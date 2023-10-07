import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import StarWrapper from "../sectionWrapper/sectionWrap";
import lottieAnimation from "../assets/lottiefiles/rocket.json"
import { contacts } from "../constants";
import Lottie from "react-lottie";
import { uwu } from "../assets";
import emailjs from "@emailjs/browser";

//cRFszuvyo1cLwxUfQ
//template_78odl5j
//service_ynnx7sg

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_g051qof",
        "template_wpcfoxn",
        {
          from_name: form.name,
          to_name: "Rohan Kumar Pushpam",
          from_email: form.email,
          to_email: "rohan12dx@gmail.com",
          message: form.message,
        },
        "5tOell84dFtZhLbAz"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const defaultOptions = {
    loop : true,
    autoplay : true,
    animationData : lottieAnimation,
  }
  
  return (
  <>
    <motion.div className="content-center" variants={textVariant()}>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
    </motion.div>
    <div
      className={`xl:mt-12 xs:m-5 flex xl:flex-row flex-col w-full h-auto justify-between`}
    >
      <div
        className='flex-[0.75] bg-[#915EFF] p-5 rounded-2xl'
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 mb-5 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-[#915EFF] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
          <div className="sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] relative z-[5] flex items-center justify-center pointer-events-none rounded-2xl">
            <Lottie
              options={defaultOptions}
            />
            
          </div>
          </div>
          <div className="flex mt-2 items-center justify-center">
          <ul className='list-none flex flex-row'>
            {contacts.map((nav) => (
              <li
                key={nav.id}
                onClick={() => setActive(nav.title)}
              >
                <button className="neon-button rounded-full m-1.5 w-7 h-7 sm:w-10 sm:h-10 bg-white">
                    <img 
                      className="w-full h-full p-1" 
                      src={nav.icon} 
                      alt="img" 
                      onClick={() => window.open(nav.link, "_blank")}
                    />
                  </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      </>
  )
}

export default StarWrapper(Contact, "contact")
