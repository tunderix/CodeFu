import React from "react";
import styled from "styled-components";
import { string, number } from "prop-types";
import SkillIcon from "./SkillIcon";

const Skill = styled.div`
  justify-content: center;
  min-width: 460px;
`;

const maxSkillValue = 5;
const SkillComponent = (i, skillValue) => (
  <SkillIcon key={"si_" + i} isChecked={i < skillValue}></SkillIcon>
);

const SkillCategory = ({ skillTitle, skillValue }) => (
  <Skill className="row">
    <div className="col-4">{skillTitle}</div>
    {Array.from(Array(maxSkillValue)).map((v, i) =>
      SkillComponent(i, skillValue)
    )}
  </Skill>
);

SkillCategory.defaultProps = {
  skillTitle: "xxx",
  skillValue: 2
};
SkillCategory.propTypes = {
  skillTitle: string,
  skillValue: number
};

export default SkillCategory;
