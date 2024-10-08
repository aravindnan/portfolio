import React,{useState} from 'react'
import SingleProjComponent from './SingleProjComponent';
import { Projects } from '../DATA/data';

function ProjectsBlock() {

   

 const [activeTabId,setActiveTabId] = useState("none");  
  return (
    <div className="flex flex-col my-10 ">
    <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-anchor-placement="bottom">
      Projects
    </div>
    <div className="flex flex-col ">
        {
            Projects.map((node)=>(
                <SingleProjComponent data={node} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
            ))
        }
    </div>

  </div>
  )
}

export default ProjectsBlock