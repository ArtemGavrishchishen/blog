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

const PostView = ({
  title = '',
  body = '',
  creator = '',
  date = '',
  goBack,
}) => (
  <div>
    <Wrapper>
      <Button onClick={goBack}>Go Back</Button>
    </Wrapper>
    <div>{title}</div>
    <div>{body}</div>
    <div>{creator}</div>
    <div>{date}</div>
  </div>
);

export default PostView;
