import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 24px;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const LeftPart = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background: transparent;
  padding: 12px;
`;

export const CardTitle = styled.div`
  margin-bottom: 1rem;
`;

export const EmptyCard = styled.p``;

export const RightPart = styled.div`
  flex: 0.3;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  margin-top: 48px;
  & > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px;
  }
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
