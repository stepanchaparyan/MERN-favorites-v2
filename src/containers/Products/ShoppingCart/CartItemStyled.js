import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 12px;
  align-items: center;
  border-bottom: 1px solid gray;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const ImageContainer = styled.div`
  margin: auto;
`;

export const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
`;

export const InfoContainer = styled.div`
  width: 60%;
  margin: auto 24px;
  background: ${props => props.theme.white};
  height: fit-content;
  font-size: 14px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: auto;
`;

export const Price = styled.p`
  width: fit-content;
  border-bottom: 1px solid lightgray;
`;

export const CartContainer = styled.div`
  width: 250px;
  margin: 12px 0;
  border: 1px solid gray;
  box-shadow: 0 1px 4px lightgray;
  ${tabletUp`
    width: 300px;
  `};
`;

export const CartData = styled.p`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 12px 20px;
  margin: 0;
  font-size: 14px;
  border-bottom: 1px solid #00000033;
`;

export const ButtonContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
`;

export const StyledButton = styled.button`
  padding: 10px 16px;
  background: ${props => props.theme.cadetblue};
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.lightGray};
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  margin: 2px;
  outline: none;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;
