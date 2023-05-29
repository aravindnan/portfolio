import React from 'react'
import Typewriter from "typewriter-effect";

function PersonalInfoBlock() {
  return (
    <div className=" flex flex-col  mt-10 lg:mt-32 mb-10 md:mb-20">
    <div className=" min-h-[130px] md:w-auto text-[50px]  md:text-[75px] lg:text-[80px] xl:text-[100px] font-bold leading-tight" data-aos="fade-in">
      <Typewriter

     options={{
          strings: ["Aravind Nandakumar"],
          autoStart: true,
          loop:true,
          cursor:"_",
          delay:200,
          deleteSpeed:'natural' 
        }}
      />
    </div>
    <div data-aos="fade-in" className=" md:text-[20px] lg:text-[30px] font-semibold">Computer Science Graduate</div>
    <div data-aos="fade-down" className=" mt-8 md:mt-10 text-[14px] md:text-[18px]">
    Results-driven and forward-thinking IT professional with a 
    proven track record in multimedia manipulation, interactive
     programming, and machine learning integration.<br/><br/>Continually 
     exploring innovative programming methodologies and new desing
      trends in user experience.<br/><br/> Seeking an opportunity to apply my
       expertise, drive user engagement, and contribute to the advancement 
       of groundbreaking projects in a collaborative and fast-paced environment.
    </div>
  </div>
  )
}

export default PersonalInfoBlock