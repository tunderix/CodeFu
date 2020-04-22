import React from "react";
import styled from "styled-components";
import Jams from "./JamData.json";
import JamList from "./GameJamListComponent";

const GameJams = styled.div``;

const GameJamsSection = () => (
  <GameJams>
    <h1>Game Jams</h1>
    <JamList jamListData={Jams}></JamList>
  </GameJams>
);

export default GameJamsSection;
