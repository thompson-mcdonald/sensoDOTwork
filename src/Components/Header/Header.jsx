import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 80%;
  max-width: 740px;
  padding: 2rem 0 3rem 3rem;
  @media screen and (min-width: 750px) {
    margin: 0 auto;
    padding: 2rem 0;
  }
  & a {
    opacity: 0.3;
    transition: all .5s;
    user-select: none;
  }
  & a:hover, button:hover {
    opacity: 1;
    transition: all .5s;
  }
  & a:link {
    color: #111;
    text-decoration: none;
  }
`;

const Logo = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  &:link, &:visited {
    color: #111;
    text-decoration: none;
  }
  @media screen and (min-width: 375px) {
    font-size: 20px;
  }
  @media screen and (min-width: 750px) {
    font-size: 24px;
  }
`;



export default () => (
  <div>
    <Header>
      <Logo href="/">Senso.work</Logo>
    </Header>
  </div>
);
