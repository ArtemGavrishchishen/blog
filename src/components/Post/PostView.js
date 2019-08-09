import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: grid;
  border-radius: 4px;
  min-height: 30px;
  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  padding: 10px;
  border: 0;
  color: #3c484e;
  transition: all 0.4s ease;
  margin-bottom: 5px;
`;

const PostView = ({
  title = '',
  body = '',
  creator = '',
  date = '',
  goBack,
}) => (
  <Item>
    <Wrapper>
      <Button onClick={goBack}>Go Back</Button>
    </Wrapper>
    <Item>{title}</Item>
    <Item>{creator}</Item>
    <Item>{date}</Item>
    <Item>{body}</Item>
  </Item>
);

export default PostView;
