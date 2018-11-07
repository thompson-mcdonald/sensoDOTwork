import React from "react";
import styled from "styled-components";
import BecalmedImgOne from './../../Images/Becalmed_one.png';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import WorkLink from './../WorkLink/WorkLink';

const WorkStrip = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const StripWrap = styled.div`
  margin-bottom: 15rem;
  text-align: center;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
`;

const WorkImg = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;


export default () => (
  <StripWrap>
    <Title>Becalmed - Oblique Strategies for your terminal</Title>
    <SubTitle>Idea, Development</SubTitle>
    <WorkStrip>
          <WorkImg src={BecalmedImgOne} />
    </WorkStrip>
    <WorkLink href="http://npmjs.com/package/becalmed" target="_blank" alt="CR003" />
  </StripWrap>
);
