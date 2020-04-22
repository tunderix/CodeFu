import React from "react";
import styled from "styled-components";
import { string, number } from "prop-types";
import Gem from "../../../assets/img/codeFuIcons/04.png";

const Skill = styled.div`
  justify-content: center;
`;

const StyledSkillIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const SkillIcon = () => (
  <div className="col-1">
    <StyledSkillIcon src={Gem}></StyledSkillIcon>
  </div>
);

const SkillCategory = ({ skillTitle, skillValue }) => (
  <Skill className="row">
    <div className="col-4">{skillTitle}</div>
    {Array.from(Array(skillValue)).map(() => SkillIcon())}
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
