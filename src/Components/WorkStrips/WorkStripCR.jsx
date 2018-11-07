import React, { Fragment } from "react";
import styled from "styled-components";
import CRImgOne from './../../Images/CR_one.png';
import CRImgTwo from './../../Images/CR_two.png';
import CRImgThree from './../../Images/CR_three.png';
import Description from './../Description/Description';
import WorkLink from './../WorkLink/WorkLink';


const WorkStrip = styled.div`
  margin: 2rem auto;
  width: 90%;
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    grid-gap: 10px;
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
  max-height: 310px;
  max-width: 100%;
  @media screen and (min-width: 750px) {
    max-height: 426px;
  }
`;

const StripWrap = styled.div`
  margin-bottom: 15rem;
  text-align: center;
`;

export default () => (
  <StripWrap>
    <Title>CR003: Plata - 'Last Dayz'</Title>
    <SubTitle>Development, Additional Design</SubTitle>
    <WorkStrip>
      <WorkImg src={CRImgOne} />
      <WorkImg src={CRImgTwo} />
    </WorkStrip>
    <Description>
      I worked with Circadian Rhythms to build out their latest release; including a secret quantity of hidden downloadable tunes.
    </Description>
    <WorkLink href="https://circadian-rhythms.com/cr003" target="_blank" alt="CR003" />
  </StripWrap>
);
