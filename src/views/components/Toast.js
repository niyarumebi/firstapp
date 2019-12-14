import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: fixed;
  top: 123px;
  left: 0;
  right: 0;
  height: 70px;
  background:#4398ED;
  color:#fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;



function Toast (props) {

  const {
      message
  } = props;

  return (
          <Container>
            {message}
          </Container>
      )
};

export default Toast;
