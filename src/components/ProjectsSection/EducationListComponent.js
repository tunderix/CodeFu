import React from "react";
import styled from "styled-components";
import PropTypes, { number, string } from "prop-types";
import { EducationComponent } from "../Common/ProjectList/ListComponents";

const EducationListComponent = styled.div``;

const EducationList = ({ educationListData }) => (
  <EducationListComponent className="container">
    {educationListData.Education.map((eduData, i) => (
      <EducationComponent
        key={eduData.schoolName + "_" + i}
        projectData={eduData}
      ></EducationComponent>
    ))}
  </EducationListComponent>
);

EducationList.defaultProps = {
  educationListData: {}
};
EducationList.propTypes = {
  educationListData: PropTypes.any
};

export default EducationList;
