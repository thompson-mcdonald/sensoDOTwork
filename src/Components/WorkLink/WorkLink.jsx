import React from "react";
import styled from "styled-components";

const Con = styled.div`
  display: inline-block;
`;

const WorkLink = styled.a`
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  padding: .75rem 1rem;
  margin: 0 .3rem 0 0;
  font-size: 14px;
  &:link, &:visited {
    color: #111;
    text-decoration: none;
    font-style: italic;
    border: 1px solid #F5F5F5;
    border-top-color: #111;
    transition: .4s all;
  }
  &:hover {
    border-color: #111;
    transition: .4s all;
    background: #efefef;
  }
`;

export default ({ alt, target, href, text }) => (
  <Con>
    <WorkLink href={href} target={target} alt={alt}>{text}</WorkLink>
  </Con>
);
