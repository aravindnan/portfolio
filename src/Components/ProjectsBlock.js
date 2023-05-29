import React,{useState} from 'react'
import SingleProjComponent from './SingleProjComponent';

function ProjectsBlock() {

    const ProjData=[

       {projID:"p1",
        projectName:"Generative Designs",
        projectMedium:["Javascript","HTML","CSS"],
        projectLink:"https://github.com/aravindnan/generativedesigns.github.io",
        projectFeatures:[
          "Created animations to explore and experiment with system randomness.",
          "Utilized external JavaScript libraries as well as user input to manipulate and generate sound.",
          "Implemented basic programming methodologies in an interactive manner.",
          "Successfully tampered with video data obtained from a live webcam feed.",
          "Integrated predefined machine learning libraries with P5.js.",
          "Implemented a small Weather API implementation to get current weather of any place in the world",
          "Successfully achieved the project goals by combining creativity, technical skills, and programming methodologies.",

        ]},
        {projID:"p2",
        projectName:"PONG Game",
        projectMedium:["C++"],
        projectLink:"https://github.com/aravindnan/Pong-Game",
        projectFeatures:[
          "A simple game written in C++.",
          "Implementation of Object oriented Programming in C++.",
          "Usage of File Handling libraries to store scores.",
          "User Driven and Single player.",
        ]},
        {projID:"p5",
        projectName:"Algorithms and DS",
        projectMedium:["C++"],
        projectLink:"https://github.com/aravindnan/AlogorithmsCPP",
        projectFeatures:[
          "To implement basic data structures",
          "User driven and CLI interface",
          "Includes operations of Array Data structures like Stack ,Queue and Circular Queue.",
          "Dynamic Data Stucture operations of Singly and Doubly Linked List.",
          "Basic implentation of Hash Map, Binary Tree and and Graph.",
          "Implementation of basic Sorting and Searching on arrays."

        ]},

        {projID:"p3",
        projectName:"Attendance App",
        projectMedium:["Figma","UI/UX"],
        projectLink:"https://drive.google.com/drive/folders/1_F1oqSr-F3m-POaJlu8XbJIuswPkDZPl?usp=share_link",
        projectFeatures:[
          "Created a UI design and UX workflow.",
          "Target audience of students for keeping track of their attendance.",
          "To be on schedule with the timetable and mark assignments and deadlines.",
          "Explorative project to understand the principles of UX design and to convey information in a minimalistic manner.",
        ]},

        {projID:"p4",
        projectName:"Public User App for NGO",
        projectMedium:["Figma","UI/UX"],
        projectLink:"https://drive.google.com/drive/folders/1_F1oqSr-F3m-POaJlu8XbJIuswPkDZPl?usp=share_link",
        projectFeatures:[
          "Created a UI design and UX workflow.",
          "Target audience of individuals requiring help from organisation or to donate to it.",
          "To display various campaigns and courses offered by the organisation to help people in need and provide a learing platform.",
          "Interactive and colorful screens reflecting the organisations actions.",
          "Project done as part of an internship and design being a proprietary property of the organisation.",
        ]},

    ]

 const [activeTabId,setActiveTabId] = useState("none");  
  return (
    <div className=" flex flex-col my-10 ">
    <div className="font-bold text-[#00000086] text-[14px] md:text-[18px]  " data-aos="fade-in">
      Projects
    </div>
    <div className="flex-col flex  ">
        {
            ProjData.map((node)=>(
                <SingleProjComponent data={node} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
            ))
        }
    </div>

  </div>
  )
}

export default ProjectsBlock