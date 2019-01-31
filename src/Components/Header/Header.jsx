import React from "react";
import styled from "styled-components";
import LogoImg from './../../Images/logo.svg';

const Header = styled.header`
  width: 80%;
  max-width: 550px;
  margin-left: 2rem;
  padding: 5rem 0 0;
  @media screen and (min-width: 750px) {
    padding: 5rem 0 4rem;
    margin-left: 5rem;
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

const Logo = styled.img`
  width: 50px;
`;

const Name = styled.div`
  text-align: right;
  font-size: 20px;
  margin-top: -40px;
`;

export default () => (
  <div>
    <Header>
      <Logo src={LogoImg} />
      <Name>Jacob Thompson</Name>
    </Header>
  </div>
);
