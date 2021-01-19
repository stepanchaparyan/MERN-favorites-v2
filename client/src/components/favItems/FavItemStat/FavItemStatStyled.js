import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: black;
  padding: 8px 8px 6px 8px;
  margin-top: 8px;
  cursor: pointer;
  background-color: WhiteSmoke;
  position: relative;
  border-radius: 4px;
`;

export const Title = styled.div`
  color: ${props => props.theme.cadetblue};
  font-weight: bold;
  font-size: 12px;
  ${tabletUp`
    font-size: 18px;
  `};
`;

export const DataContainer = styled.div`
  padding: 5px 0;
  width: 100%;
  position: absolute;
  top: 22px;
  left: 0px;
  background-color: WhiteSmoke;
  ${tabletUp`
    top: 30px;
  `};
`;

export const Category = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const Name = styled.div`
  width: 70%;
  margin-left: 10px;
`;

export const Count = styled.div`
  color: ${props => props.theme.cadetblue};
  font-weight: bold;
`;
