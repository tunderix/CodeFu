import React from "react";
import styled from "styled-components";
import PropTypes, { string, arrayOf } from "prop-types";
import SkillRow from "./SkillRow";
const SCategory = styled.div``;
const SkillCategoryContainer = styled.div`
  justify-content: center;
`;
const Skill = styled.div`
  justify-content: center;
`;

const SkillCategory = ({ header, skillData }) => (
  <SCategory className="col">
    <SkillCategoryContainer className="container">
      <Skill className="row">
        <h3>{header}</h3>
      </Skill>
      {skillData.map((skill, i) => (
        <SkillRow
          key={skill.title + "_" + i}
          skillTitle={skill.title}
          skillValue={skill.value}
        ></SkillRow>
      ))}
    </SkillCategoryContainer>
  </SCategory>
);

SkillCategory.defaultProps = {
  header: "xxx",
  skillData: [
    { title: "xoxo", value: 5 },
    { title: "HoXo", value: 4 }
  ]
};
SkillCategory.propTypes = {
  header: string,
  skillData: PropTypes.array
};

export default SkillCategory;
