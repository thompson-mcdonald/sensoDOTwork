import React from "react";
import styled from "styled-components";
import Title from './../Components/Title/Title';
import WorkStripCR from './../Components/WorkStrips/WorkStripCR';
import WorkStripGabi from './../Components/WorkStrips/WorkStripGabi';
import WorkStripMorsli from './../Components/WorkStrips/WorkStripMorsli';
import WorkStripBecalmed from './../Components/WorkStrips/WorkStripBecalmed';

const Container = styled.div`
  max-width: 740px;
  width: 70%;
  margin: 0 0 0 3rem;
  @media screen and (min-width: 750px) {
    margin: 0 auto;
  }
`;

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 16px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  margin: 0 auto;
  line-height: 1.45em;
  letter-spacing: 0.01em;
  & a:link, a:visited {
    text-decoration: underline;
  }
  @media screen and (min-width: 750px) {
    font-size: 16px;
  }
  & a:link, a:visited {
    color: #111;
    text-decoration: underline;
  }
  & a:hover {
    text-decoration: none;
  }
`;

const Content = styled.div`
  width: 100%;
  text-align: left;
`;

const WorkWrapper = styled.div`
  margin-top: 5rem;
`;

export default () => (
  // Start CR Work Strip
  <Container>
    <Blurb>
      <Content>
        <Title>Information</Title>
        <p>I'm a designer + developer with 6 years total experience. My last full-time position was Visual Lead at <a href="https://userelease.com/">Release Platform</a>. Since then I've been working on Gabi's Reagent Companion, and working alongside Circadian Rhythms on their music releases.</p>

        <p>Recently, I've really enjoyed building site front-ends with React + Styled Components, as well as designing UIs for the small-web and the big-web.</p>

        <p>I'm on the lookout for remote freelance work and full-time work in Bristol.</p>
        <p>You can email me at <a href="mailto:jthompsonmcdonald@gmail.com">jthompsonmcdonald@gmail.com</a></p>
      </Content>
    </Blurb>
    <WorkWrapper>
      <WorkStripCR />
      <WorkStripGabi />
      <WorkStripMorsli />
      <WorkStripBecalmed />
    </WorkWrapper>
  </Container>
);
