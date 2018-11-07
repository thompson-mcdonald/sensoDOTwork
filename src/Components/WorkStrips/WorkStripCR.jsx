import React from "react";
import styled from "styled-components";
import Iframe from 'react-iframe';
import CRImgOne from './../../Images/CR_one.png';
import Description from './../Description/Description';
import WorkLink from './../WorkLink/WorkLink';


const WorkStrip = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
`;


const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
  padding: 0;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  margin: 0;
`;

const WorkImg = styled.img`
  margin-top: 30px;
  max-width: 100%;
  margin-bottom: 10px;
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
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
    <Title>CR003: Plata - 'Last Dayz'</Title>
    <SubTitle>Development, Additional Design</SubTitle>
    <WorkStrip>
      <SiteFrame url="http://circadian-rhythms.com/cr003" position="static" height="inherit" />
    </WorkStrip>
    <WorkImgWrap>
      <WorkImg src={CRImgOne} />
    </WorkImgWrap>
    <Description>
      I worked with Circadian Rhythms to build out their latest release; including a secret quantity of hidden downloadable tunes.
    </Description>
    <WorkLink href="https://circadian-rhythms.com/cr003" target="_blank" alt="CR003" />
  </StripWrap>
);
