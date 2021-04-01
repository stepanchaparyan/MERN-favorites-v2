import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 24px 24px 60px;
`;

export const CardsContainer = styled.div`
  flex: 0.7;
  margin-right: 1rem;
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  width: 50%;
  margin: 12px auto 24px auto;
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
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
