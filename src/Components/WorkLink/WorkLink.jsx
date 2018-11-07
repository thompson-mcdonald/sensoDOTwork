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
    border: 1px solid #111;
    border-top-color: white;
    transition: .4s all;
  }
  &:hover {
    border-top-color: white;
    border-bottom-color: white;
    transition: .4s all;
    background: #888;
  }
`;

export default ({ alt, target, href }) => (
  <div>
    <WorkLink href={href} target={target} alt={alt}>SEE PROJECT</WorkLink>
  </div>
);
