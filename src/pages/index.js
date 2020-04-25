import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import IntroductionSection from "../components/IntroductionSection";
import SkillsSection from "../components/SkillsSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import ProjectsSection from "../components/ProjectsSection";
import GameJamsSection from "../components/GameJamSection";
import ContactMeSection from "../components/ContactSection";
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Img fluid={data.file.childImageSharp.fluid} />
    <IntroductionSection className="container-fluid cfsection"></IntroductionSection>
    <SkillsSection className="container-fluid"></SkillsSection>
    <CapabilitiesSection className="container-fluid"></CapabilitiesSection>
    <ProjectsSection className="container-fluid"></ProjectsSection>
    <GameJamsSection className="container-fluid"></GameJamsSection>
    <ContactMeSection className="container-fluid"></ContactMeSection>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "Avatar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.defaultProps = {
  data: {}
};
IndexPage.propTypes = {
  data: Any
};

export default IndexPage;
