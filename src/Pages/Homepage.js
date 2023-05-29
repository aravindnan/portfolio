import React from "react";
import Typewriter from "typewriter-effect";
import PersonalInfoBlock from "../Components/PersonalInfoBlock";
import WorkExperienceBlock from "../Components/WorkExperienceBlock";
import Footer from "../Components/Footer";
import EducationBlock from "../Components/EducationBlock";
import ProjectsBlock from "../Components/ProjectsBlock";
import IntrestsBlock from "../Components/IntrestsBlock";

function Homepage() {
  return (
    <>
    <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[75%]">
      <PersonalInfoBlock/>
      <WorkExperienceBlock/>
      <ProjectsBlock/>
      <EducationBlock/>
      <IntrestsBlock/>
    </div>
      <Footer/>
    </>
  );
}

export default Homepage;
