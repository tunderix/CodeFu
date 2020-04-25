import React from "react";
import styled from "styled-components";
import TimeSpanStep from "./TimeSpanStep";
import IconEducation from "../../assets/img/codeFuIcons/Education.png";
import IconSales from "../../assets/img/codeFuIcons/Sales.png";
import IconGameDev from "../../assets/img/codeFuIcons/GameDev.png";
import IconIT from "../../assets/img/codeFuIcons/IT.png";
import IconMobile from "../../assets/img/codeFuIcons/Mobile.png";

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
        image={IconEducation}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Sales"
        image={IconSales}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={5}
        description="Games"
        image={IconGameDev}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="IT Dev"
        image={IconIT}
      ></TimeSpanStep>
      <ArrowIcon></ArrowIcon>
      <TimeSpanStep
        years={3}
        description="Mobile"
        image={IconMobile}
      ></TimeSpanStep>
    </div>
  </TimeSpanComponent>
);

export default TimeSpan;
