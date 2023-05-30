import React from 'react'
import SingleEducationComponent from './SingleEducationComponent'

function EducationBlock() {
   const EduData=[
    //   {
    //       eduId:"ed1",
    //       courseName:"Masters In Computer Application",
    //       duration:"Currently Persuing",
    //       institutionName:"Christ University,Bangalore",
         
    //  },
     {
        eduId:"ed2",
        courseName:"Bachelors of Science in Computer Application",
        duration:"June 2019 - May 2022",
        institutionName:"Sacred Heart College,Kerala",
       
     },
     {
        eduId:"ed2",
        courseName:"Schooling",
        duration:"Batch of 2019",
        institutionName:"Bhavans Vidya Mandir,Kerala",
       
     }
    ]
  return (
    
        <div className=" flex flex-col my-10">
            <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos-anchor-placement="bottom" data-aos="fade-in">
            Education
            </div>
            <div className="flex-col flex  ">
                {
                    EduData.map((node)=>(
                        <SingleEducationComponent data={node}/>
                    ))
                }
            </div>
      </div>

  )
}

export default EducationBlock