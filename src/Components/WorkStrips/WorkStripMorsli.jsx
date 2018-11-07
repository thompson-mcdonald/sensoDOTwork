import React from "react";
import styled from "styled-components";
import MorsliImgOne from './../../Images/Morsli_one.png';
import Iframe from 'react-iframe';
import Description from './../Description/Description';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkLink from './../WorkLink/WorkLink';

const WorkStrip = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
`;

const WorkImg = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;

const SiteFrame = styled(Iframe)`
  max-width: 1000px;
  height: 760px!important;
  margin: 0 auto;
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
`;

const WorkImgWrap = styled.div`
  display: block;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export default () => (
  <StripWrap>
    <Title>Tom Morsli Portfolio</Title>
    <SubTitle>Development</SubTitle>
    <WorkStrip>
      <SiteFrame url="http://tmorsli.com" position="static"  />
    </WorkStrip>
    <WorkImgWrap>
      <WorkImg src={MorsliImgOne} />
    </WorkImgWrap>
    <Description>
      <p>Tom is a really good friend and a really good photographer and editor. <br /> I helped with his site.</p>
    </Description>
    <WorkLink href="http://tmorsli.com" target="_blank" alt="Tom Morsli" />
  </StripWrap>
);
