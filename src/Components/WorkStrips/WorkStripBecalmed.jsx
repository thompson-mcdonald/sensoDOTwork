import React from "react";
import styled from "styled-components";
import BecalmedImgOne from './../../Images/Becalmed_one.png';
import Title from './../Title/Title';
import SubTitle from './../SubTitle/SubTitle';
import Description from './../Description/Description';
import WorkLink from './../WorkLink/WorkLink';
import WorkImage from './../WorkImage/WorkImage';

const WorkStrip = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 0;
`;

const StripWrap = styled.div`
  margin-bottom: 15rem;
  @media screen and (min-width:  750px) {
    margin-bottom: 15rem;
  }
`;

export default () => (
  <StripWrap>
    <Title>Becalmed - Oblique Strategies for your terminal</Title>
    <SubTitle>Idea, Development</SubTitle>
    <WorkStrip>
          <WorkImage src={BecalmedImgOne} />
    </WorkStrip>
    <Description>
      <p>Brian Eno's Oblique Strategies, but in your terminal.<br />The creative problem solver you didn't know you needed. </p>
    </Description>
    <WorkLink href="http://npmjs.com/package/becalmed" target="_blank" alt="CR003" text="SEE PROJECT" />
  </StripWrap>
);
