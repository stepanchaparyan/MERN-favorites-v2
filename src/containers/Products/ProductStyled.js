import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 1rem;
  margin: 8px auto;
  background: ${props => props.theme.white};
  cursor: pointer;
  box-shadow: 0 1px 4px #0000006b;
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: contain;
  border-radius: 8px;
`;

export const Info = styled.div``;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 1rem;
  overflow: hidden;
`;

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 0.8rem;
`;

export const Price = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.veryDarkGray};
  padding: 8px 16px;
  background-color: ${props => props.theme.lightGray};
  border: 1px solid ${props => props.theme.veryDarkGray};
  font-size: 1rem;
  :hover {
    background: ${props => props.theme.veryDarkGray};
    color: ${props => props.theme.lightGray};
  }
`;
