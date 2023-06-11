import React from 'react'
import SingleEducationComponent from './SingleEducationComponent'
import { Education } from '../DATA/data'

function EducationBlock() {
 
  return (
    
        <div className=" flex flex-col my-10">
            <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos-anchor-placement="bottom" data-aos="fade-in">
            Education
            </div>
            <div className="flex-col flex  ">
                {
                    Education.map((node)=>(
                        <SingleEducationComponent data={node}/>
                    ))
                }
            </div>
      </div>

  )
}

export default EducationBlock