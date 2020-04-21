import React from "react";
import styled from "styled-components";

const FaBaseStyle = styled.button`
  padding: 20px;
  font-size: 30px;
  width: 100px;
  height: 100px;
  text-align: center;
  text-decoration: none;
`;

const FacebookIconComponent = styled(FaBaseStyle)`
  background: #3b5998;
  color: white;
`;

const TwitterIconComponent = styled(FaBaseStyle)`
  background: #55acee;
  color: white;
`;

export const TwitterIcon = () => (
  <TwitterIconComponent
    href="#"
    className="fa fa-twitter"
  ></TwitterIconComponent>
);

export const FacebookIcon = () => (
  <FacebookIconComponent
    href="#"
    className="fa fa-facebook"
  ></FacebookIconComponent>
);
