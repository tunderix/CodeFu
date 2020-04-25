import React from "react";
import styled from "styled-components";
import TimeSpanStep from "./TimeSpanStep";
import CFImage from "../Common/CFImage";

const TimeSpanComponent = styled.div``;

const Arrow = styled.div`
  padding: 0px 0px 10px 10px;
  font-size: 60px;
  width: 160px;
  text-align: center;
  text-decoration: none;
`;

const ArrowIcon = () => <Arrow className="col fa fa-long-arrow-right"></Arrow>;

const TimeSpan = () => (
  <TimeSpanComponent className="container">
    <div className="row">
      <TimeSpanStep
        years={3}
        description="School"
        image={undefined}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Sales"
        image={undefined}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={5}
        description="Games"
        image={undefined}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="IT Dev"
        image={undefined}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Mobile"
        image={undefined}
      ></TimeSpanStep>
    </div>
  </TimeSpanComponent>
);

export default TimeSpan;
