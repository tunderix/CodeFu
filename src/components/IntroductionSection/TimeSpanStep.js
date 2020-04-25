import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import Img from "gatsby-image";

const TimeSpanStepComponent = styled.div``;

const TimeSpanStep = ({ years, description, image }) => (
  <TimeSpanStepComponent className="col">
    <div className="container">
      <div className="row">
        <div className="col">{description}</div>
        <div className="col">{years} years</div>
      </div>
    </div>
  </TimeSpanStepComponent>
);

TimeSpanStep.defaultProps = {
  years: 0,
  description: "-",
  image: ""
};
TimeSpanStep.propTypes = {
  years: number,
  description: string,
  image: string
};
export default TimeSpanStep;
