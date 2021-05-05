import styled from 'styled-components';
import { tabletUp } from '../../styles/mediaQueries/mixins';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.cadetblue};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 32px 32px;
  font-weight: 600;
  font-size: 30px;
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
  margin: 2px;
  outline: none;
  ${tabletUp`
    width: 30%;
  `};
`;

export const LoginButton = styled.button`
  border-bottom: 1px solid ${props => props.theme.cadetblue};
  padding: 7px 10px;
  margin: 2px;
  outline: none;
  width: 40%;
  border: 0;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  margin-top: 16px;
  border-radius: 3%;
  cursor: pointer;
  ${tabletUp`
    width: 20%;
  `};
`;

export const ErrorMessages = styled.div`
  color: red;
  width: 30%;
  font-size: 12px;
`;

export const QuestionText = styled.div`
  display: flex;
  align-self: center;
  margin: 10px;
  & > a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0;
`;

export const ErrorButton = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
