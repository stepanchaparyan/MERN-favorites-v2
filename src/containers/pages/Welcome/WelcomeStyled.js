import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const WelcomeText = styled.div`
  font-size: 30px;
  padding: 32px 32px 0 32px;
  height: 110px;
  ::after {
    content: '';
    width: 0px;
    height: 5px;
    display: inline-block;
    background: ${props => props.theme.cadetblue};
    transition: 500ms;
  }
  :hover::after {
    width: 100%;
  }
  ${tabletUp`
    font-size: 50px;
  `};
`;

export const LongText = styled.div`
  font-size: 20px;
  padding: 12px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 26px;
  ${tabletUp`
    font-size: 32px;
  `};
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 120px;
  right: 100px;
  display: none;
  ${tabletUp`
    display: block;
  `};
`;

export const Music = styled.span`
  color: blue;
  padding: 5px;
  transition: 300ms;
  border-bottom: 3px solid transparent;
  transition: 1s;
  :hover {
    border-color: blue;
  }
`;

export const Films = styled.span`
  color: red;
  padding: 5px;
  border-bottom: 3px solid transparent;
  transition: 1s;
  :hover {
    border-color: red;
  }
`;

export const Books = styled.span`
  color: limeGreen;
  padding: 5px;
  border-bottom: 3px solid transparent;
  transition: 1s;
  :hover {
    border-color: limeGreen;
  }
`;

export const Other = styled.span`
  color: orange;
  padding: 5px;
  border-bottom: 3px solid transparent;
  transition: 1s;
  :hover {
    border-color: orange;
  }
`;

export const PieContainer = styled.div`
  display: flex;
`;

export const Pie = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: lightGray;
  background-image: ${props =>
    `linear-gradient(to right, transparent 50%, ${props.theme.cadetblue} 0)`};
  &:before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background: ${props => props.theme.cadetblue};
    transform-origin: left;
    background-color: ${props => props.inherit};
    transform: ${props =>
      props.inherit === 'inherit'
        ? `rotate(${props.per * 3.6}deg)`
        : `rotate(${(props.per - 50) * 3.6}deg)`};
  }
`;

export const Pie2 = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  background: white;
`;
