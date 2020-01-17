import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
    margin-top: 2rem;
`;

export default ({ title, client, involvement, image }) =>
    <Wrap>
        <img src={image}  />
        <div>Project: {title}</div>
        <div>Client: {client}</div>
        <div>Role: {involvement}</div>
    </Wrap>