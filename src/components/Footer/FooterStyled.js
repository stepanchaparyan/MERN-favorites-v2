import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background: #253d3e;
  color: white;
  height: 50px;
  bottom: 0;
  width: calc(100% - 20px);
  padding-left: 20px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  margin: 10px 20px;
  align-self: center;
`;
