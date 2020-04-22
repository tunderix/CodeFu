import React from "react";
import styled from "styled-components";
import SkillCategory from "../Common/SkillCategory";

const Capabilities = styled.div``;
const SkillsContainer = styled.div``;

const CapabilitiesSection = () => (
  <Capabilities>
    <h1>Global Capabilities</h1>
    <SkillsContainer className="container">
      <div className="row">
        <SkillCategory header="Project Management"></SkillCategory>
        <SkillCategory header="Tools"></SkillCategory>
        <SkillCategory header="Processes"></SkillCategory>
      </div>
    </SkillsContainer>
  </Capabilities>
);

export default CapabilitiesSection;
