import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
const StyledProjectComponent = styled.div``;

const ProjectComponent = ({ projectData }) => (
  <StyledProjectComponent className="row">
    <div className="col-4">
      <h4>{projectData.projectName}</h4>
    </div>
    <div className="col-6">
      <p>{projectData.description}</p>
    </div>
  </StyledProjectComponent>
);

ProjectComponent.defaultProps = {
  projectData: { projectName: "Some" }
};
ProjectComponent.propTypes = {
  projectData: PropTypes.any
};

export default ProjectComponent;
