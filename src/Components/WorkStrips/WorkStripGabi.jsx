import React from "react";
import styled from "styled-components";
import Iframe from 'react-iframe';
import GabiImgOne from './../../Images/Gabi_one.png';
import GabiImgTwo from './../../Images/Gabi_two.png';
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

const WorkImg = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;

const SiteFrame = styled(Iframe)`
  max-width: 1000px;
  height: 760px!important;
  margin: 0 auto;
  display: none;
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  @media screen and (min-width: 750px) {
    margin-bottom: 15rem;
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
    <Title>Gabi's Reagent Compnion</Title>
    <SubTitle>Idea, Design, Development</SubTitle>
    <WorkStrip>
      <SiteFrame url="http://reagent.gabi.website/" position="static"  />
    </WorkStrip>
    <WorkImgWrap>
      <WorkImg src={GabiImgOne} />
      <WorkImg src={GabiImgTwo} />
    </WorkImgWrap>
    <Description>
      Gabi is a tool designed to assist recreational drug users test at home. This serves as an educational tool on Reagent Testing.
    </Description>
    <WorkLink href="https://reagent.gabi.website/" target="_blank" alt="Gabi's Reagent Companion" />
  </StripWrap>
);
