import React from 'react';
import styled from 'styled-components';

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

const Form = styled.form`
  display: inline-block;
  min-height: 4rem;
`;

const Input = styled.input`
  background: none;
  border: none;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  padding: 0.25rem 0.1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const Btn = styled.button`
  background-color: #d8e6f3;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  border: 0px;
  outline: 0px;
  transition: background-color 0.2s linear;
  margin-bottom: 20px;
  border-radius: 5px;

  &:hover {
    background-color: #afcde7;
  }
`;
const CommentsView = ({ comments = [], text = '', submit, change }) => (
  <Wrapper>
    <ul>
      {comments.map(comment => (
        <Item key={comment.id}>{comment.body}</Item>
      ))}
    </ul>
    <Form onSubmit={submit}>
      <h4>You can add your comment</h4>
      <Input
        name="comment"
        placeholder="Write your comment"
        value={text}
        onChange={change}
        autofocus="true"
      />
      <Btn type="submit">Post Comment </Btn>
    </Form>
  </Wrapper>
);

export default CommentsView;
