import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import BookIcon from "../../assets/img/codeFuIcons/pt_t_18.png";

const TimeSpanStepComponent = styled.div``;

const StudyIcon = styled.img``;

const TimeSpanStep = ({ years, description, image }) => (
  <TimeSpanStepComponent className="col">
    <div className="container">
      <div className="row">
        <StudyIcon src={image} className="col"></StudyIcon>
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
  children: PropTypes.any,
  years: number,
  description: string,
  image: string
};
export default TimeSpanStep;
