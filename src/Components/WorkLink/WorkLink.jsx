import React from "react";
import styled from "styled-components";

const WorkLink = styled.a`
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  padding: .5rem;
  &:link, &:visited {
    color: white;
    text-decoration: none;
    border: 1px solid #1D1E1F;
    border-top-color: white;
    transition: .4s all;
  }
  &:hover {
    border-color: white;
    transition: .4s all;
    background: #1D1E1F;
  }
`;

export default ({ alt, target, href }) => (
  <div>
    <WorkLink href={href} target={target} alt={alt}>SEE PROJECT</WorkLink>
  </div>
);
