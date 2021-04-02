import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 24px 24px 60px;
`;

export const CardsContainer = styled.div`
  background: transparent;
  padding: 12px;
`;

export const PageTitle = styled.div`
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.cadetblue};
`;

export const EmptyCard = styled.p``;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  align-self: flex-end;
  margin: 16px 24px 24px;
  box-shadow: 0 1px 4px #00000066;
`;

export const Info = styled.div`
  & > p {
    padding: 8px;
    :last-child {
      font-weight: bold;
    }
  }
`;

export const ButtonContainer = styled.div``;

export const ButtonStyled = styled.button`
  padding: 10px 17px;
  width: 100%;
  background: ${props => props.theme.veryDarkGray};
  color: ${props => props.theme.lightGray};
  border: 1px solid ${props => props.theme.veryDarkGray};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
