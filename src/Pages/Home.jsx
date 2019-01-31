import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 550px;
  margin: 1rem 2rem;
  box-sizing: border-box;
  @media screen and (min-width: 750px) {
    margin: 1rem 5rem;
  }
`;

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 16px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  margin: 0 auto;
  line-height: 1.4em;
  letter-spacing: 0.01em;
  @media screen and (min-width: 750px) {
    font-size: 18px;
    line-height: 1.4;
  }
  & a:link, a:visited {
    color: #fff;
    border-bottom: 1px solid green;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  text-align: left;
`;

const WorkWrapper = styled.div`
  margin-top: 5rem;
`;

const Bigger = styled.p`
  font-size: 24px;
  line-height: 1.6;
`;

const Navigate = styled.div`
  font-size: 16px;
  line-height: 1.6;
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
        <Bigger>I'm a Designer + Front End Developer with 6 years total experience. My last full-time position was Visual Lead at <a href="https://userelease.com/">Release Platform</a>. Since then I've been working with <a href="https://circadian-rhythms.com/">Circadian Rhythms</a> on their latest releases and new website.</Bigger>

        <p>I'm on the lookout for remote freelance work and full-time work in Bristol. I’ve worked on a wide breadth of projects, from startup branding to designing that page with the bin-collection schedule on.</p>

        <p>I have extensive experience with:</p>

        <p>-	HTML & CSS<br />
        -	Gulp, Grunt<br />
        -	Sass, Postcss, Tachyons<br />
        -	React, Rails, Jekyll, Netlify<br />
        -	NPM, Yarn, Git, styled-components<br />
        - Sketch, Photoshop, Figma<br />
        - Wireframing + UX Design</p>
        <p>Recent Work</p>
        <RecentWork>
          <p>
            <a href="http://circadian-rhythms.com/">http://circadian-rhythms.com</a> - Development<br />
            <a href="http://circadian-rhythms.com/003">http://circadian-rhythms.com/003</a> - Development<br />
            <a href="https://tmorsli.com/">https://tmorsli.com</a> - Design + Development<br />
            <a href="https://userelease.com">https://userelease.com</a> - Design + Development<br />
            <a href="https://highland.gov.uk">https://highland.gov.uk</a> - Design + Development<br />
          </p>
        </RecentWork>
        <hr />
        <Navigate>
          <p>jthompsonmcdonald [at] gmail [dot] com
          <br />
            <a href="https://github.com/thompson-mcdonald">https://github.com/thompson-mcdonald</a>
          </p>
        </Navigate>
      </Content>
    </Blurb>
    <WorkWrapper>
    </WorkWrapper>
  </Container>
);
