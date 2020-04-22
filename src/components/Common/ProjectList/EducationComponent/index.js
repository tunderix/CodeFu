import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import image from "../../../../assets/img/codeFuIcons/04.png";
const StyledEducationComponent = styled.div``;

const ProjectImage = styled.img`
  width: 80px;
  height: 80px;
`;

const EducationComponent = ({ eduData }) => (
  <StyledEducationComponent className="row">
    <div className="col-4">
      <h4>{eduData.schoolName}</h4>
    </div>
    <div className="col-6">
      <p>{eduData.description}</p>
    </div>
    <div className="col-2">
      <ProjectImage src={image}></ProjectImage>
    </div>
  </StyledEducationComponent>
);

EducationComponent.defaultProps = {
  eduData: { schoolName: "Some", description: "Hauskaa oli" }
};
EducationComponent.propTypes = {
  eduData: PropTypes.any
};

export default EducationComponent;
