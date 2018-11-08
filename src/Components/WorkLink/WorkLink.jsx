import React from "react";
import styled from "styled-components";

const WorkLink = styled.a`
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  padding: .75rem 1rem;
  &:link, &:visited {
    color: #111;
    text-decoration: none;
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

export default ({ alt, target, href }) => (
  <div>
    <WorkLink href={href} target={target} alt={alt}>SEE PROJECT</WorkLink>
  </div>
);
