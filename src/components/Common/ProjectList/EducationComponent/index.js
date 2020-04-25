import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";

import CFImage from "../../../Common/CFImage";
import Img from "gatsby-image";

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
    <div className="col-2"></div>
  </StyledEducationComponent>
);

EducationComponent.defaultProps = {
  eduData: { schoolName: "Some", description: "Hauskaa oli" }
};
EducationComponent.propTypes = {
  eduData: PropTypes.any
};

export default EducationComponent;
