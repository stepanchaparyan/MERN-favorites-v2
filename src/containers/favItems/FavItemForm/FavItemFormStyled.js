import styled from 'styled-components';
import { tabletUp, desktopUp, desktopLargeUp } from '../../../styles/mediaQueries/mixins';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.cadetblue};
  z-index: 1;
  position: absolute;
  background-color: gray;
  left: 50%;
  top: 24%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  min-width: 66%;
  min-height: 20%;
  text-align: center;
  font-size: 14px;
  ${tabletUp`
    top: 36%;
    min-width: 50%;
    min-height: 30%;
  `};
  ${desktopUp`
    top: 36%;
    min-width: 40%;
    min-height: 32%;
  `};
  ${desktopLargeUp`
    top: 50%;
    min-width: 36%;
    min-height: 48%;
  `};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  font-weight: 600;
  font-size: 22px;
  color: black;
  ${tabletUp`
    font-size: 24px;
  `};
  ${desktopUp`
    font-size: 26px;
  `};
  ${desktopLargeUp`
    font-size: 30px;
  `};
`;

export const Input = styled.input`
  border: 0px;
  width: 200px;
  padding: 8px 10px;
  margin: 4px;
  outline: none;
  border-radius: 4px;
`;

export const ButtonSubmit = styled.button`
  padding: 8px 10px;
  margin: 4px;
  outline: none;
  border-radius: 4px;
  width: 20%;
  border: 0;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const CancelButton = styled.button`
  padding: 8px 10px;
  margin: 4px;
  outline: none;
  border-radius: 4px;
  width: 30%;
  border: 0;
  background-color: gray;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 10px 10px;
`;

export const ErrorButton = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const StyledSelectField = styled(Field)`
  width: 58%;
  background: white;
  height: 32px;
  outline: none;
  border: none;
  border-bottom: 1px solid cadetblue;
  padding-left: 5px;
  margin: 4px;
  ${tabletUp`
    width: 45%;
  `};
`;

export const Option = styled.option`
  color: black;
  height: 47px;
  padding: 20px;
  font-size: 18px;
  color: ${props => props.theme.cadetblue};
`;

export const DefaultOption = styled.option`
  display: none;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.cadetblue};
  width: 50%;
  padding: 7px 10px;
  margin: 3px;
  outline: none;
  ${tabletUp`
    width: 40%;
  `};
`;

export const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;
