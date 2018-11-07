import React, { Fragment } from "react";
import styled from "styled-components";

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  max-width: 750px;
  margin: 0 auto;
  & a:link, a:visited {
    text-decoration: underline;
  }
  @media screen and (min-width: 750px) {
    font-size: 14px;
  }
  & p {
    font-family: 'space mono', monospace;
  }
  & a:link, a:visited {
    color: white;
    text-decoration: underline;
  }
  & a:hover {
    text-decoration: none;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export default () => (
  <Blurb>
    <Title>Information</Title>
    <p>I'm a designer + developer with 6 years total experience. My last full-time position was Visual Lead at <a href="https://userelease.com/">Release Platform</a>. Since then I've been working on Gabi's Reagent Companion, and working alongside Circadian Rhythms on their releases.</p>

    <p>Recently, I've been really enjoying building site front-ends with React + Styled Components, as well as designing UIs for the small-web and the big-web.</p>

    <p>I'm on the lookout for a new role in Bristol, or remote. Email me at <a href="mailto:jthompsonmcdonald@gmail.com">jthompsonmcdonald@gmail.com</a></p>
  </Blurb>
);
