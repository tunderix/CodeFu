import React from "react";
import styled from "styled-components";
import SkillCategory from "../Common/SkillCategory";

const Skills = styled.div``;
const SkillsContainer = styled.div``;
const SkillsSection = () => (
  <Skills>
    <h1>Skills</h1>
    <SkillsContainer className="container">
      <div className="row">
        <SkillCategory header="Mobile"></SkillCategory>
        <SkillCategory header="Games"></SkillCategory>
        <SkillCategory header="IT"></SkillCategory>
        <SkillCategory header="IT"></SkillCategory>
      </div>
    </SkillsContainer>
  </Skills>
);

export default SkillsSection;
