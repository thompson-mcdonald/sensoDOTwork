import React from "react";
import styled from "styled-components";
import CRImgOne from './../../Images/CR_one.png';
import Description from './../Description/Description';
import WorkLink from './../WorkLink/WorkLink';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkImg from './../WorkImage/WorkImage';

const WorkStrip = styled.div`
  margin: 2rem auto;
  width: 100%;
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
`;

const WorkImgWrap = styled.div`

`;

export default () => (
  <StripWrap>
    <Title>CR003: Plata - 'Last Dayz'</Title>
    <SubTitle>Development, Additional Design</SubTitle>
    <WorkImgWrap>
      <WorkImg src={CRImgOne} />
    </WorkImgWrap>
    <Description>
      I worked with Circadian Rhythms to build out their latest release; including a secret quantity of hidden downloadable tunes.
    </Description>
    <WorkLink href="http://circadian-rhythms.com/cr003" target="_blank" alt="CR003" text="SEE PROJECT" />
  </StripWrap>
);
