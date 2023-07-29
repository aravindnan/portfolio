import React from 'react'
import SingleIntrestComponent from './SingleIntrestComponent'
import { Intrests } from '../DATA/data'

function IntrestsBlock() {


  return (
    <div className=" flex flex-col my-10  ">
    <div className="font-bold text-[#00000086] text-[14px] md:text-[18px] text-center md:text-left" data-aos="fade-in" data-aos-anchor-placement="bottom" data-aos-once={true}>
      Skills
    </div>
    <div className="flex flex-row flex-wrap my-3  justify-center 2xl:justify-normal">
        {
            Intrests.map((node)=>(
                <SingleIntrestComponent data={node}/>
            ))
        }
    </div>
    {/*  lg:flex-row  md:grid-cols-6 grid-cols-4 sm:grid-cols-5  justify-items-center   grid lg:flex my-3  */}

  </div>
  )
}

export default IntrestsBlock