import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: inline-block;
  min-height: 4rem;
  padding-top: 2rem;
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

const Text = styled.textarea`
  background: none;
  border: none;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  padding: 0.25rem 0.1rem;
  width: 100%;
  margin-bottom: 10px;
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

const PostEditorView = ({
  title = '',
  creator = '',
  body = '',
  submit,
  change,
}) => (
  <Wrapper>
    <Form onSubmit={submit}>
      <h1>Add a new ToDo!</h1>
      <Input
        name="title"
        placeholder="Write the title of your post"
        required
        value={title}
        onChange={change}
        autofocus="true"
      />
      <Input
        name="creator"
        placeholder="Creator"
        required
        value={creator}
        onChange={change}
      />
      <Text
        name="body"
        rows="7"
        placeholder="Write your post"
        value={body}
        onChange={change}
      />
      <Wrapper>
        <Btn type="submit">Post or Edit </Btn>
      </Wrapper>
    </Form>
  </Wrapper>
);

export default PostEditorView;
