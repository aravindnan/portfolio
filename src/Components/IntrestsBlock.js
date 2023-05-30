import React from 'react'
import SingleIntrestComponent from './SingleIntrestComponent'

function IntrestsBlock() {

    const IntrestsData=[
        {name:"Python",logo:"python"},
        {name:"React",logo:"react"},
        {name:"NodeJs",logo:"node"},
        {name:"Java",logo:"java"},
        {name:"CSS",logo:"css"},
        {name:"HTML",logo:"html"},
        {name:"Figma",logo:"figma"},
        {name:"C++",logo:"c++"},
        {name:"DBMS",logo:"dbms"},
        {name:"Illustrator",logo:"illustrator"},
        {name:"XD",logo:"xd"},
        {name:"UI/UX", logo:"uiux"}

    ]

  return (
    <div className=" flex flex-col my-10 ">
    <div className="font-bold text-[#00000086] text-[14px] md:text-[18px] text-center md:text-left" data-aos="fade-in" data-aos-anchor-placement="bottom" data-aos-once={true}>
      Skills
    </div>
    <div className="md:flex-row grid-cols-5 grid md:flex my-3 ">
        {
            IntrestsData.map((node)=>(
                <SingleIntrestComponent data={node}/>
            ))
        }
    </div>

  </div>
  )
}

export default IntrestsBlock