import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import IntroductionSection from "../components/IntroductionSection";
import SkillsSection from "../components/SkillsSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import ProjectsSection from "../components/ProjectsSection";
import GameJamsSection from "../components/GameJamSection";
import ContactMeSection from "../components/ContactSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionSection></IntroductionSection>
    <SkillsSection></SkillsSection>
    <CapabilitiesSection></CapabilitiesSection>
    <ProjectsSection></ProjectsSection>
    <GameJamsSection></GameJamsSection>
    <ContactMeSection></ContactMeSection>
  </Layout>
);

export default IndexPage;
