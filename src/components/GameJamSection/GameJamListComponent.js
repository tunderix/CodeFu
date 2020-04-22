import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import { GameJamComponent } from "../Common/ProjectList/ListComponents";

const JamListComponent = styled.div``;

const JamList = ({ jamListData }) => (
  <JamListComponent className="container">
    {jamListData.GameJams.map((jamData, i) => (
      <GameJamComponent
        key={jamData.jamName + "_" + i}
        jamData={jamData}
      ></GameJamComponent>
    ))}
  </JamListComponent>
);

JamList.defaultProps = {
  jamListData: {}
};
JamList.propTypes = {
  jamListData: PropTypes.any
};

export default JamList;
