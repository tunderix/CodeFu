import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
const imageQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "images/Avatar.jpg" }) {
      ...squareImage
    }
    education: file(relativePath: { eq: "images/Education.PNG" }) {
      ...squareImage
    }
  }
`;
export default imageQuery;
