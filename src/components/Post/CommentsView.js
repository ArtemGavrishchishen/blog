import React from 'react';
import styled from 'styled-components';

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
  <div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
    <Form onSubmit={submit}>
      <h4>You can add your comment</h4>
      <Input
        name="text"
        placeholder="Write your comment"
        value={text}
        onChange={change}
      />
      <Btn type="submit">Post Comment </Btn>
    </Form>
  </div>
);

export default CommentsView;
