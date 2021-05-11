import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PNF from '../../assets/404.jpg';

export const Container = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  background-image: url(${PNF});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 70vh;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 28px;
  position: absolute;
  bottom: 10vh;
`;
