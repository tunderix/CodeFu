import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectListComponent";
import ProjectData from "./ProjectData.json";
import EducationList from "./EducationListComponent";

const Projects = styled.div``;

const ProjectsSection = () => (
  <Projects>
    <h1>Education and Projects</h1>
    <h3>Education</h3>
    <EducationList educationListData={ProjectData}></EducationList>
    <h3>Projects</h3>
    <ProjectList projectListData={ProjectData}></ProjectList>
  </Projects>
);

export default ProjectsSection;
