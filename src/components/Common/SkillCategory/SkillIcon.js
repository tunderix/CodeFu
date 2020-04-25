import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";
import EmptyImage from "../../../assets/img/codeFuIcons/Skill_Empty.png";
import BackgroundImage from "../../../assets/img/codeFuIcons/Skill_BG.png";
import CheckImage from "../../../assets/img/codeFuIcons/SkillMarker.png";

const EmptyIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const CheckedIcon = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
`;

const Background = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
`;

const StyledSkillIcon = styled.div`
  padding: 0px;
`;

const SkillIcon = ({ isChecked }) => (
  <StyledSkillIcon className="col-1">
    {isChecked ? (
      <div>
        <Background src={BackgroundImage}></Background>
        <CheckedIcon src={CheckImage}></CheckedIcon>
      </div>
    ) : (
      <EmptyIcon src={EmptyImage}></EmptyIcon>
    )}
  </StyledSkillIcon>
);

SkillIcon.defaultProps = {
  isChecked: false
};
SkillIcon.propTypes = {
  isChecked: bool
};

export default SkillIcon;
