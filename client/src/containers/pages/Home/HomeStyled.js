import styled from 'styled-components';

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
  width: 1048px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterAndSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const FavItemStatContainer = styled.div``;
