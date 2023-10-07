import React from 'react'

const Footer = (props) => {
  const { light } = props;

  return (
    <>
    <div className='flex justify-center items-center p-1'>
      <p className={`${
                light? "text-slate-500" : "text-white"
              }`}>Made by <span className='text-[#915EFF] font-extrabold'>Rohan</span></p>
    </div>
    </>
  )
}

export default Footer
