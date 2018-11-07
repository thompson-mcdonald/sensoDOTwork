import React, { Fragment } from "react";
import styled from "styled-components";
import BecalmedImgOne from './../../Images/Becalmed_one.png';
import Description from './../Description/Description';
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
`;

const WorkImg = styled.img`
  max-width: 500px;
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
