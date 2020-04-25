import React from "react";
import styled from "styled-components";
import SkillCategory from "../Common/SkillCategory";
import CFSection from "../Common/CFSection";

const SkillsContainer = styled.div``;
const SkillsSection = () => (
  <CFSection>
    <h1>Skills</h1>
    <SkillsContainer className="container">
      <div className="row">
        <SkillCategory header="Mobile"></SkillCategory>
        <SkillCategory header="Games"></SkillCategory>
        <SkillCategory header="IT"></SkillCategory>
        <SkillCategory header="IT"></SkillCategory>
      </div>
    </SkillsContainer>
  </CFSection>
);

export default SkillsSection;
