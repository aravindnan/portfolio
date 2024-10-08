import React from 'react'
import SingleEducationComponent from './SingleEducationComponent'
import { Education } from '../DATA/data'

function EducationBlock() {
 
  return (
    
        <div className="flex flex-col my-10 ">
            <div data-aos-duration="1000"  data-aos-once={true} data-aos="fade-up" className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos-anchor-placement="bottom" >
            Education
            </div>
            <div className="flex flex-col ">
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