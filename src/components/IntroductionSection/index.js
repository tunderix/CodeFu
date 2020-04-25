import React from "react";
import TimeSpan from "./TimeSpan";
import CFSection from "../Common/CFSection";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const IntroductionSection = () => (
  <CFSection>
    <h1>Sami Repo</h1>
    <p>Extrovert Developer with good communication skills</p>
    <TimeSpan></TimeSpan>
  </CFSection>
);

export default IntroductionSection;
