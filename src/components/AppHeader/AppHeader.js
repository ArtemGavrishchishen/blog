import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.section`
  padding: 0.5em;
  background: #1976d2;
`;

const AppHeader = () => (
  <div>
    <Wrapper>
      <Title>Blog</Title>
    </Wrapper>
  </div>
);

export default AppHeader;
