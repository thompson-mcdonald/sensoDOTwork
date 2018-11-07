import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  padding: 2rem 0 3rem;
  text-align: center;
  & a {
    opacity: 0.5;
    transition: all .5s;
    user-select: none;
  }
  & a:hover, button:hover {
    opacity: 1;
    transition: all .5s;
  }
  & a:link {
    color: white;
    text-decoration: none;
  }
`;

const Logo = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  &:link, &:visited {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
  @media screen and (min-width: 750px) {
    font-size: 18px;
  }
`;



export default () => (
  <div>
    <Header>
      <Logo href="/">Senso.work</Logo>
    </Header>
  </div>
);
