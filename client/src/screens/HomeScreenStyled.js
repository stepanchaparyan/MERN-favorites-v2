import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  margin-left: 8px;
`;

export const Context = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledLink = styled(Link)`
  display: flex;
  background: #333;
  padding: 2px 10px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  :hover {
    background: ${props => props.theme.cadetblue};
  }
`;

export const CardCount = styled.p`
  width: 25px;
  height: 25px;
  display: flex;
  background-color: #f4f4f4;
  border-radius: 50%;
  color: #171717;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.p`
  display: flex;
  padding-right: 10px;
  margin: auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding-right: 24px;
  justify-content: flex-end;
`;
