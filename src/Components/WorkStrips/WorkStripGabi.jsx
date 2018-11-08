import React from "react";
import styled from "styled-components";
import GabiImgOne from './../../Images/Gabi_one.png';
import GabiImgTwo from './../../Images/Gabi_two.png';
import Description from './../Description/Description';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkLink from './../WorkLink/WorkLink';
import WorkImage from './../WorkImage/WorkImage';

const WorkStrip = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  @media screen and (min-width: 750px) {
    margin-bottom: 15rem;
  }
`;

const WorkImgWrap = styled.div`
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default () => (
  <StripWrap>
    <Title>Gabi's Reagent Companion</Title>
    <SubTitle>Idea, Design, Development</SubTitle>
    <WorkImgWrap>
      <WorkImage src={GabiImgOne} />
      <WorkImage src={GabiImgTwo} />
    </WorkImgWrap>
    <Description>
      Gabi is a tool designed to assist recreational drug users test at home. This serves as an educational tool on Reagent Testing.
    </Description>
    <WorkLink href="https://reagent.gabi.website/" target="_blank" alt="Gabi's Reagent Companion" text="SEE PROJECT" />
    <WorkLink href="https://medium.com/@SafeGabi/introducing-gabis-reagent-companion-2be6e253facc" target="_blank" text="READ MORE" alt="Gabi's Reagent Companion" />
  </StripWrap>
);
