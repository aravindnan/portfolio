import React,{useState} from 'react'
import SingleWorkComponent from './SingleWorkComponent'
import { WorkExperience } from '../DATA/data';


function WorkExperienceBlock() {


    const [activeTabId,setActiveTabId] = useState("none");

  return (
    <div className=" flex flex-col">
        <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos="fade-in">
          Work Experiance
        </div>
        <div className="flex-col flex  ">
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