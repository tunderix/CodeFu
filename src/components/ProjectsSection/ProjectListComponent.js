import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import ProjectComponent from "../Common/ProjectList/ListComponents";
import { Link, graphql, StaticQuery } from "gatsby";

const ProjectListComponent = styled.div``;

const ProjectList = ({ projectListData }) => (
  <ProjectListComponent className="container">
    {/*projectListData.allMarkdownRemark.map((projectData, i) => (
      <ProjectComponent
        key={projectData.projectName + "_" + i}
        projectData={projectData}
      ></ProjectComponent>
    ))*/}
  </ProjectListComponent>
);

ProjectList.defaultProps = {
  projectListData: {},
  count: 0
};
ProjectList.propTypes = {
  projectListData: PropTypes.any,
  count: number
};

export default ProjectList;
