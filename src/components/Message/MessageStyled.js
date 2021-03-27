import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 6px 0;
  background-color: lightGray;
  color: black;
  width: 100%;
  height: 16px;
  position: absolute;
  top: 55px;
  font-size: 16px;
  text-align: center;
  display: inline-block;
  animation: ${() => fade} 10s linear;
`;

const fade = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
