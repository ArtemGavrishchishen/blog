import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { modalActions } from '../../redux/modal';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 200px;
  padding: 16px;
  background-color: #fff;
`;

const Btn = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 40px;
  height: 40px;
  opacity: 0.3;
  background: transparent;
  outline: none;
  font-size: 0;
  border: none;
  &:hover {
    opacity: 1;
    background: transparent;
    outline: none;
  }
  &::before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Modal = props => {
  const { onClose, children } = props;
  const backdropRef = useRef(null);

  useEffect(() => {
    const keyDownHandler = e => {
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    };
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [onClose]);

  return (
    <Backdrop ref={backdropRef}>
      <Content>
        {children}
        <Wrapper>
          <Btn onClick={onClose} />
        </Wrapper>
      </Content>
    </Backdrop>
  );
};

const mapDispatchToProps = {
  onClose: modalActions.closeModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
