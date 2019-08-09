import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #d8e6f3;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  border: 0px;
  outline: 0px;
  transition: background-color 0.2s linear;
  margin: 0 25px;
  border-radius: 5px;

  &:hover {
    background-color: #afcde7;
  }
`;

const Button = ({ onClick, children }) => (
  <Btn type="button" onClick={onClick}>
    {children}
  </Btn>
);

export default Button;
