import React,{useState} from 'react'
import SingleWorkComponent from './SingleWorkComponent'


function WorkExperienceBlock() {

   const WEdata=[
        {
            workId:"we1",
            jobTitle:"Junior React Developer",
            duration:"June 2022 - March 2023",
            companyName:"Netstratum Technologies Pvt Ltd",
            workLink:"https://drive.google.com/drive/folders/1mJQsOP_QoKO1hqUP4K2Z3myAYSOf9lNW?usp=share_link",

            RRs:[
                "Accomplished Junior React developer with 9 months of experience in diverse IT projects.",
                "Had the opportunity to study the fundementals or react developement using Electron JS for creating Desktop Apps",
                "Proficient in developing applications utilizing technologies such as messaging communication, video conferencing through websockets, and building landing pages using React and the headless content management system, Strapi",
                "Successfully contributed to the development of a travel booking software, enabling users to conveniently plan and book their holiday trips.",
                "Skilled in creating visually appealing and user-friendly interfaces using React, Tailwind, and CSS.",
                "Demonstrated ability to work on multiple projects simultaneously, showcasing adaptability and efficiency in a fast-paced environment.",
                " Problem-solving skills and a passion for creating seamless user experiences through innovative technology solutions."
                ]
       },
       {
        workId:"we2",
        jobTitle:"UI/UX Designer (INTERNSHIP)",
        duration:"May 2021 - June 2021",
        companyName:"Youth Empowerment Foundation",
        workLink:"https://drive.google.com/drive/folders/1qMhCAWZmnCeiYf4WyjSM9YheERCS4ODK?usp=share_link",
        RRs:[
            "Designing the interface of the applications(Public User app and communication app).",
            "Designing and prototyping was done in Figma",
            "Prototyping based on the requirement of the organisation.",
            "Making changes to the designs made when and where the organisation requires me to.",
            "Creating designs without copying from any existing application and only based on my creative potential.",
            "Updating my supervisor on the day to day updates on the design through video or screenshots."
            ]
   },
    ]

    const [activeTabId,setActiveTabId] = useState("none");

  return (
    <div className=" flex flex-col">
        <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos="fade-in">
          Work Experiance
        </div>
        <div className="flex-col flex  ">
            {
                WEdata.map((node)=>(
                    <SingleWorkComponent data={node} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
                ))
            }
        </div>

      </div>
  )
}

export default WorkExperienceBlock