import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import image from "../../../../assets/img/codeFuIcons/04.png";
const StyledProjectComponent = styled.div``;

const ProjectImage = styled.img`
  width: 80px;
  height: 80px;
`;

const ProjectComponent = ({ projectData }) => (
  <StyledProjectComponent className="row">
    <div className="col-4">
      <h4>{projectData.projectName}</h4>
    </div>
    <div className="col-6">
      <p>{projectData.description}</p>
    </div>
    <div className="col-2">
      <ProjectImage src={image}></ProjectImage>
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
