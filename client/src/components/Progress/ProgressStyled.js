import styled from 'styled-components';

export const Container = styled.div`
  background-color: lightGray;
  border-radius: 4px;
  height: 14px;
  width: 100px;
`;

export const ProgressBar = styled.div`
  background-color: ${props => props.theme.cadetblue};
  color: black;
  width: ${props => `${props.width}px`};
  font-size: 12px;
  height: 14px;
  text-align: center;
`;
