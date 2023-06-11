import React from 'react'
import Typewriter from "typewriter-effect";
import { PersonalInformation } from '../DATA/data';

function PersonalInfoBlock() {
  return (
    <div className=" flex flex-col  mt-10 lg:mt-32 mb-10 md:mb-20">
    <div className=" min-h-[130px] md:w-auto text-[50px]  md:text-[75px] lg:text-[80px] xl:text-[100px] font-bold leading-tight" data-aos="fade-in" data-aos-once={true} data-aos-anchor-placement="bottom">
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
    </div>
    <div data-aos="fade-in" data-aos-once={true} className=" md:text-[20px] lg:text-[30px] font-semibold">{PersonalInformation.status}</div>
    <div data-aos="fade-down" data-aos-once={true} className=" mt-8 md:mt-10 text-[14px] md:text-[18px]">
   {PersonalInformation.personalDescription}
    </div>
  </div>
  )
}

export default PersonalInfoBlock