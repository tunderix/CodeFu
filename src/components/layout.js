/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/code-fu.css";

import styled from "styled-components";

const Mainbody = styled.div`
  margin: 0 auto;
  padding: 0 0 0;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Mainbody>
        <main className="justify-content-center text-center">{children}</main>
      </Mainbody>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
