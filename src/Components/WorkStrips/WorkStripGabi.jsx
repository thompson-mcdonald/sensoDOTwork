import React, { Fragment } from "react";
import styled from "styled-components";
import GabiImgOne from './../../Images/Gabi_one.png';
import GabiImgTwo from './../../Images/Gabi_two.png';
import GabiImgThree from './../../Images/Gabi_three.png';
import Description from './../Description/Description';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkLink from './../WorkLink/WorkLink';

const WorkStrip = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 2rem auto;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 900px) {
    max-width: 1000px;
  }

`;

const WorkImg = styled.img`
  max-width: 100%;
  margin-top: 2rem;
  &:first-child {
    display: none;
  }
  @media screen and (min-width: 750px) {
    &:first-child {
      display: inherit;
    }
  }
`;

const StripWrap = styled.div`
  margin-bottom: 15rem;
  text-align: center;
`;

export default () => (
  <StripWrap>
    <Title>Gabi's Reagent Compnion</Title>
    <SubTitle>Idea, Design, Development</SubTitle>
    <WorkStrip>
          <WorkImg src={GabiImgThree} />
          <WorkImg src={GabiImgOne} />
          <WorkImg src={GabiImgTwo} />
    </WorkStrip>
    <WorkLink href="https://reagent.gabi.website/" target="_blank" alt="Gabi's Reagent Companion" />
  </StripWrap>
);
