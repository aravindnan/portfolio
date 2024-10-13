import React from 'react'
import Typewriter from "typewriter-effect";
import { PersonalInformation } from '../DATA/data';

function PersonalInfoBlock() {
  return (
    <div className="flex flex-col mt-10 mb-10 text-center lg:mt-32 md:text-left md:mb-20">
    <div className="hidden md:flex min-h-[80px] md:w-auto text-[40px]  md:text-[75px] lg:text-[80px] xl:text-[100px] font-mono font-bold leading-tight" data-aos="fade-in" data-aos-once={true} data-aos-anchor-placement="bottom">
      <Typewriter

     options={{
          strings: [PersonalInformation.name],
          autoStart: true,
          loop:true,
          cursor:"_",
          delay:200,
          deleteSpeed:'natural' 
        }}
      />
    </div >

    <div className='flex flex-col mt-24 md:mt-0 md:hidden min-h-[120px] md:w-auto text-[45px] w-[65%] mx-auto md:text-[75px] lg:text-[80px] xl:text-[100px] font-mono font-bold leading-tight' data-aos="fade-in" data-aos-once={true} data-aos-anchor-placement="bottom">
    <Typewriter

options={{
     strings: ["Aravind Nandakumar"],
     autoStart: true,
     loop:true,
     cursor:"_",
     delay:200,
     deleteSpeed:"natural"

   }}
 />
       {/* <Typewriter
options={{
     strings: ["Nandakumar"],
     autoStart: true,
     loop:true,
     cursor:"|",
     delay:200,
     deleteSpeed:'natural' 
   }}
 /> */}


    </div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} className=" md:text-[20px] lg:text-[30px] font-semibold font-mono">{PersonalInformation.status}</div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} className=" mt-8 md:mt-10 text-[14px] md:text-[18px] text-justify md:text-left mx-3 md:mx-auto">
   {PersonalInformation.personalDescription}
    </div>
  </div>
  )
}

export default PersonalInfoBlock