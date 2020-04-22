import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import ProjectComponent from "../Common/ProjectList/ListComponents";

const ProjectListComponent = styled.div``;

const ProjectList = ({ projectListData }) => (
  <ProjectListComponent className="container">
    {projectListData.Projects.map((projectData, i) => (
      <ProjectComponent
        key={projectData.projectName + "_" + i}
        projectData={projectData}
      ></ProjectComponent>
    ))}
  </ProjectListComponent>
);

ProjectList.defaultProps = {
  projectListData: {}
};
ProjectList.propTypes = {
  projectListData: PropTypes.any
};

export default ProjectList;
