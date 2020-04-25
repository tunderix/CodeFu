import React from "react";
import styled from "styled-components";
import SkillCategory from "../Common/SkillCategory";
import CFSection from "../Common/CFSection";

const SkillsContainer = styled.div``;

const CapabilitiesSection = () => (
  <CFSection>
    <h1>Global Capabilities</h1>
    <SkillsContainer className="container">
      <div className="row">
        <SkillCategory header="Project Management"></SkillCategory>
        <SkillCategory header="Tools"></SkillCategory>
        <SkillCategory header="Processes"></SkillCategory>
        <SkillCategory header="Processes"></SkillCategory>
      </div>
    </SkillsContainer>
  </CFSection>
);

export default CapabilitiesSection;
