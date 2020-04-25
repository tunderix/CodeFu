import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCFSection = styled.div``;

const CFSection = ({ children }) => (
  <StyledCFSection className="cfsection">{children}</StyledCFSection>
);

CFSection.defaultProps = {
  children: {}
};
CFSection.propTypes = {
  children: PropTypes.any
};

export default CFSection;
