import React from "react";
import styled from "styled-components";

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
      <div className="col">Column</div>
      <ArrowIcon></ArrowIcon>
      <div className="col">Column</div>
      <ArrowIcon></ArrowIcon>
      <div className="col">Column</div>
      <ArrowIcon></ArrowIcon>
      <div className="col">Column</div>
      <ArrowIcon></ArrowIcon>
      <div className="col">Column</div>
    </div>
  </TimeSpanComponent>
);

export default TimeSpan;
