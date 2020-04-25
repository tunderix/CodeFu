import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import BookIcon from "../../assets/img/codeFuIcons/Education.png";

const TimeSpanStepComponent = styled.div``;

const StepIcon = styled.img``;

const TimeSpanStep = ({ years, description, image }) => (
  <TimeSpanStepComponent className="col">
    <div className="container">
      <div className="row">
        <StepIcon src={image} className="col"></StepIcon>
        <div className="col">{description}</div>
        <div className="col">{years} years</div>
      </div>
    </div>
  </TimeSpanStepComponent>
);

TimeSpanStep.defaultProps = {
  years: 0,
  description: "-",
  image: BookIcon
};
TimeSpanStep.propTypes = {
  years: number,
  description: string,
  image: string
};
export default TimeSpanStep;
