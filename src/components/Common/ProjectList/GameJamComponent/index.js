import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import image from "../../../../assets/img/codeFuIcons/04.png";
const StyledGameJamComponent = styled.div``;

const JamImage = styled.img`
  width: 80px;
  height: 80px;
`;

const GameJamComponent = ({ jamData }) => (
  <StyledGameJamComponent className="row">
    <div className="col-4">
      <h4>{jamData.jamName}</h4>
    </div>
    <div className="col-6">
      <p>{jamData.description}</p>
    </div>
    <div className="col-2">
      <JamImage src={image}></JamImage>
    </div>
  </StyledGameJamComponent>
);

GameJamComponent.defaultProps = {
  jamData: { jamName: "Some", description: "Hauskaa oli" }
};
GameJamComponent.propTypes = {
  jamData: PropTypes.any
};

export default GameJamComponent;
