import React from "react";
import styled from "styled-components";
import SkillCategory from "./SkillCategory";

const Skills = styled.div``;
const SkillsContainer = styled.div``;
const SkillsSection = () => (
  <Skills>
    <h1>Skills</h1>
    <SkillsContainer className="container">
      <div className="row">
        <SkillCategory></SkillCategory>
        <SkillCategory></SkillCategory>
        <SkillCategory></SkillCategory>
      </div>
    </SkillsContainer>
  </Skills>
);

export default SkillsSection;
