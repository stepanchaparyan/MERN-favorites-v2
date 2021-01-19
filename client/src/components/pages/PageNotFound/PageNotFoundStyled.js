import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const PageNotFoundText = styled.div`
  font-size: 50px;
  padding: 32px;
  color: red;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 32px;
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 150px;
  right: 150px;
`;
