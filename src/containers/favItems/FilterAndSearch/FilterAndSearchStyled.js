import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const SelectContainer = styled.div`
  & div {
    color: ${props => props.theme.cadetblue};
    font-size: 12px;
    width: auto;
    ${tabletUp`
      font-size: 17px;
    `};
  }
`;

export const InputContainer = styled.div`
  margin-left: 10px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.cadetblue};
  padding-left: 2px;
  width: 100px;
  font-size: 10px;
  ${tabletUp`
    width: auto;
    font-size: 14px;
  `};
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'cadetblue',
    backgroundColor: state.isSelected ? 'lightGray' : 'white',
    padding: 8,
    fontSize: 16,
  }),
  control: () => ({
    width: 200,
    display: 'flex',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
