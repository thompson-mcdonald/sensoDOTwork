import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from './../Wrapper/Wrapper';
import Navigation from './../Navigation/Navigation';

const Header = styled.header`
  width: 100%;
  padding: 2rem 0 3rem;
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

const Info = styled.a`
  right: 0;
  position: absolute;
  text-transform: uppercase;
  &:link, &:visited {
    color: white;
    text-decoration: none;
  }
`;


export default () => (
  <div>
    <Header>
      <Wrapper>
        <Logo href="/">Senso.work</Logo>
        <Info href="/info">Info</Info>
      </Wrapper>
    </Header>
  </div>
);
