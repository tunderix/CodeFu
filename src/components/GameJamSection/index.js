import React from "react";
import Jams from "./JamData.json";
import JamList from "./GameJamListComponent";
import CFSection from "../Common/CFSection";

const GameJamsSection = () => (
  <CFSection>
    <h1>Game Jams</h1>
    <JamList jamListData={Jams}></JamList>
  </CFSection>
);

export default GameJamsSection;
