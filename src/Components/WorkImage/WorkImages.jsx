import React, { Fragment } from "react";
import styled from "styled-components";


export default ({ image, alt }) => (
  <div>
    <img src={image} alt={alt} />
  </div>
);
