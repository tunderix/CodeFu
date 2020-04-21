import React from "react";
import styled from "styled-components";
import TimeSpanStep from "./TimeSpanStep";
import BookIcon from "../../assets/img/codeFuIcons/pt_t_18.png";
import SalesIcon from "../../assets/img/codeFuIcons/sales.png";

const TimeSpanComponent = styled.div``;

const Arrow = styled.div`
  padding: 10px;
  font-size: 60px;
  width: 160px;
  height: 100px;
  text-align: center;
  text-decoration: none;
`;

const ArrowIcon = () => <Arrow className="col fa fa-long-arrow-right"></Arrow>;

const TimeSpan = () => (
  <TimeSpanComponent className="container">
    <div className="row row-cols-9">
      <TimeSpanStep
        years={3}
        description="School"
        image={BookIcon}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Sales"
        image={SalesIcon}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={5}
        description="Games"
        image={BookIcon}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="IT Dev"
        image={BookIcon}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Mobile"
        image={BookIcon}
      ></TimeSpanStep>
    </div>
  </TimeSpanComponent>
);

export default TimeSpan;
