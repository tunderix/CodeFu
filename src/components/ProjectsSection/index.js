import React from "react";
import ProjectList from "./ProjectListComponent";
import ProjectData from "./ProjectData.json";
import EducationList from "./EducationListComponent";
import CFSection from "../Common/CFSection";

const ProjectsSection = () => (
  <CFSection>
    <h1>Education and Projects</h1>
    <h3>Education</h3>
    <EducationList educationListData={ProjectData}></EducationList>
    <h3>Projects</h3>
    <ProjectList projectListData={ProjectData}></ProjectList>
  </CFSection>
);

export default ProjectsSection;
