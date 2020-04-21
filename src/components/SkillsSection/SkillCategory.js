import React from "react";
import styled from "styled-components";

const SCategory = styled.div``;
const SkillCategoryContainer = styled.div`
  justify-content: center;
`;
const Skill = styled.div`
  justify-content: center;
`;

const SkillCategory = () => (
  <SCategory className="col">
    <SkillCategoryContainer className="container">
      <Skill className="row">
        <h3>Mobile</h3>
      </Skill>
      <Skill className="row">iOS</Skill>
      <Skill className="row">Android</Skill>
      <Skill className="row">RN</Skill>
      <Skill className="row">Swag</Skill>
    </SkillCategoryContainer>
  </SCategory>
);

export default SkillCategory;
