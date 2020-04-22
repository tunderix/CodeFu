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

const maxSkillValue = 5;
const SkillIcon = (i, skillValue) => (
  <div className="col-1">
    {i < skillValue && <StyledSkillIcon src={Gem}></StyledSkillIcon>}
  </div>
);

const SkillCategory = ({ skillTitle, skillValue }) => (
  <Skill className="row">
    <div className="col-4">{skillTitle}</div>
    {Array.from(Array(maxSkillValue)).map((v, i) => SkillIcon(i, skillValue))}
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
