import styled from 'styled-components';
import { tabletUp, desktopUp, desktopLargeUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 270px;
  ${tabletUp`
    width: 544px;
  `};
  ${desktopUp`
    width: 816px;
  `};
  ${desktopLargeUp`
    width: 1088px;
  `};
`;

export const CardContainer = styled.div`
  display: flex;
  margin: 16px 0;
  flex-flow: wrap;
  opacity: ${props => (props.myOpacity ? 0.2 : 1)};
  justify-content: left;
`;

export const Button = styled.button`
  align-items: center;
  border: 0px;
  padding: 10px;
  outline: none;
  background-color: ${props => props.theme.cadetblue};
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  width: 50%;
  border-radius: 4px;
  align-self: center;
  font-weight: 600;
`;

export const LoadingMessage = styled.h3`
  display: flex;
  justify-content: center;
`;
