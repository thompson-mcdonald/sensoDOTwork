import React from "react";
import styled from "styled-components";
import MorsliImgOne from './../../Images/Morsli_one.png';
import Description from './../Description/Description';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkLink from './../WorkLink/WorkLink';

const WorkStrip = styled.div`
  width: 100%;
  margin: 2rem auto;
`;

const StripWrap = styled.div`
  margin-bottom: 5rem;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
`;

const WorkImg = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;

const WorkImgWrap = styled.div`

`;

export default () => (
  <StripWrap>
    <Title>Tom Morsli Portfolio</Title>
    <SubTitle>Development</SubTitle>
    <WorkImgWrap>
      <WorkImg src={MorsliImgOne} />
    </WorkImgWrap>
    <Description>
      <p>Tom is a really good friend and a really good photographer and editor. <br /> I helped with his site.</p>
    </Description>
    <WorkLink href="http://tmorsli.com" target="_blank" alt="Tom Morsli" />
  </StripWrap>
);
