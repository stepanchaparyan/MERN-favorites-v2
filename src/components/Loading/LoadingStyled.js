import styled from 'styled-components';
import { tabletUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: ${props => (props.isNavbar ? 'none' : 'flex')};
  margin: auto;
  justify-content: center;
  ${tabletUp`
    display: flex;
  `};
`;
