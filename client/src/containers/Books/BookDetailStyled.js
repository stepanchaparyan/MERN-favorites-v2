import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoBook = styled.div`
  display: flex;
  width: 250px;
  color: black;
  font-size: 16px;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  background: WhiteSmoke;
  height: 100%;
`;

export const Context = styled.div`
  margin: auto;
`;

export const BooksContainer = styled.div`
  display: flex;
  justify-context: space-between;
  padding: 4px;
  :nth-child(even) {
    background: WhiteSmoke;
  }
  :nth-child(odd) {
    background: Gainsboro;
  }
`;

export const Data = styled.div`
  padding: 10px;
  min-width: 120px;
`;

export const Edit = styled(Link)`
  padding: 10px;
  min-width: 120px;
  color: black;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;

export const Delete = styled.div`
  padding: 10px;
  min-width: 120px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
