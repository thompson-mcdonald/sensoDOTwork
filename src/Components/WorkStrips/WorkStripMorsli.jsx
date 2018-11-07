import React, { Fragment } from "react";
import styled from "styled-components";
import MorsliImgOne from './../../Images/Morsli_one.png';
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
  max-width: 100%;
  margin-top: 2rem;
`;


export default () => (
  <StripWrap>
    <Title>Tom Morsli Portfolio</Title>
    <SubTitle>Development</SubTitle>
    <WorkStrip>
          <WorkImg src={MorsliImgOne} />
    </WorkStrip>
    <WorkLink href="https://tmorsli.com" target="_blank" alt="Tom Morsli" />
  </StripWrap>
);
