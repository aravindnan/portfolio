import React,{useState} from 'react'
import SingleWorkComponent from './SingleWorkComponent'
import { WorkExperience } from '../DATA/data';


function WorkExperienceBlock() {


    const [activeTabId,setActiveTabId] = useState("none");

  return (
    <div className="flex flex-col ">
        <div data-aos="fade-up" data-aos-duration="1000" className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " >
          Work Experiance
        </div>
        <div className="flex flex-col ">
            {
                WorkExperience.map((node)=>(
                    <SingleWorkComponent data={node} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
                ))
            }
        </div>

      </div>
  )
}

export default WorkExperienceBlock