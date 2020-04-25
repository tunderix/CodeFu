import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

import CFImage from "../../Common/CFImage";
import Img from "gatsby-image";

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
    {isChecked ? <div></div> : <div></div>}
  </StyledSkillIcon>
);

SkillIcon.defaultProps = {
  isChecked: false
};
SkillIcon.propTypes = {
  isChecked: bool
};

export default SkillIcon;
