import React from "react";
import styled from "styled-components";

const WorkImg = styled.img`
  max-width: 100%;
  margin: 2rem 0 1rem 0;
  box-shadow: #888 1px 1px 15px;
`;

export default ({ src, alt }) => (
  <div>
    <WorkImg src={src} alt={alt} />
  </div>
);
