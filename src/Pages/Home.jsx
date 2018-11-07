import React, { Fragment } from "react";
import styled from "styled-components";
import WorkStripCR from './../Components/WorkStrips/WorkStripCR';
import WorkStripGabi from './../Components/WorkStrips/WorkStripGabi';
import WorkStripMorsli from './../Components/WorkStrips/WorkStripMorsli';
import WorkStripBecalmed from './../Components/WorkStrips/WorkStripBecalmed';
import CRHome from './../Images/CR_home.png';

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  & a:link, a:visited {
    text-decoration: underline;
  }
  @media screen and (min-width: 750px) {
    font-size: 14px;
  }
`;

const WorkImage = styled.img`

`;

const WorkWrapper = styled.div`
  margin-top: 5rem;
`;

export default () => (
  // Start CR Work Strip
  <WorkWrapper>
    <WorkStripCR />
    <WorkStripGabi />
    <WorkStripMorsli />
    <WorkStripBecalmed />
  </WorkWrapper>
);
