import React from "react";
import styled from "styled-components";
import Work from '../Components/Work';

const Container = styled.div`
  box-sizing: border-box;
  @media screen and (min-width: 750px) {
  }
`;

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  margin: 0 auto;
  line-height: 1.4em;
  letter-spacing: 0.01em;
  @media screen and (min-width: 750px) {
    font-size: 18px;
    line-height: 1.4;
  }
  a {
    line-height: 1.2;
  }
  & a:link, a:visited {
    color: #000;
    background: yellow;
    text-decoration: underline;
  }
  & a:hover {
    background: transparent;
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  text-align: left;
  position: static;
  box-sizing: border-box;
  padding: 0 2rem;
  @media screen and (min-width: 698px) {
    max-width: 60vw;
    margin-left: 5rem;
    margin-top: 5vh;
  }
`;

const WorkWrapper = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 698px) {
    margin-left: 5rem;
    right: 0;
    position: absolute;
    top: 60vw;
    height: 100vw;
    width: 50vw;  
  }
  background: #fff;
`;

const Bigger = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Navigate = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 5rem;
`;

const RecentWork = styled.div`
  list-style-type: none;
  margin-bottom: 2rem;
  line-height: 1.6;
  span {
    opacity: .75;
  }
`;

export default () => (
  <Container>
    <Blurb>
      <Content>
        <Bigger>I'm a Designer + Front End Developer with 6 years total experience. My last full-time position was Visual Lead at Release Platform. Since then I've been contracting, and working as a part of <a href="https://circadian-rhythms.com/">Circadian Rhythms</a>, as website admin  annd developer.</Bigger>

        <Navigate>
          <p>jthompsonmcdonald [at] gmail [dot] com
          <br />
            <a href="https://github.com/thompson-mcdonald">https://github.com/thompson-mcdonald</a>
          </p>
        </Navigate>

        <p css={`font-size: 20px;`}>Recent Work</p>
        <RecentWork>
          <div>
            <p><a href="http://circadian-rhythms.com/">http://circadian-rhythms.com</a><br /> Development</p>
            <p><a href="http://circadian-rhythms.com/003">http://circadian-rhythms.com/003</a><br /> Development</p>
            <p><a href="http://circadian-rhythms.com/003">http://circadian-rhythms.com/004</a><br /> Development</p>
            <p><a href="https://tmorsli.com/">https://tmorsli.com</a><br /> Design + Development</p>
            <p><a href="https://reagent.gabi.website/">https://reagent.gabi.website</a><br /> Design + Development</p>
            <p><a href="https://userelease.com">https://userelease.com</a><br /> Design + Development</p>
            <p><a href="https://highland.gov.uk">https://highland.gov.uk</a><br /> Design + Development</p>
          </div>
        </RecentWork>
      </Content>
    </Blurb>
    {/* <WorkWrapper>
      <Work>

      </Work>
    </WorkWrapper> */}
  </Container>
);
