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
  border: 0px;
  border-bottom: 1px solid ${props => props.theme.cadetblue};
  width: 50%;
  padding: 7px 10px;
  margin: 2px;
  outline: none;
  ${tabletUp`
    width: 30%;
  `};
`;

export const RegisterButton = styled.button`
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
  border-radius: 4px;
  cursor: pointer;
  ${tabletUp`
    width: 20%;
  `};
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0;
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

export const ErrorMessages = styled.div`
  color: red;
  width: 30%;
  font-size: 12px;
`;

export const ErrorButton = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const modalStyles = {
  content: {
    border: 'none',
    position: 'unset'
  },
  overlay: {
    position: 'fixed',
    inset: '0%',
    zIndex: '1'
  }
};

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 32px;
  text-align: center;
  ${tabletUp`
    max-width: 500px;
    margin: auto;
    padding: 100px;
  `};
`;

export const ButtonConfirm = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  padding: 8px;
  min-width: 120px;
  width: fit-content;
`;

export const ModalTitleContainer = styled.div`
  background-color: ${props => props.theme.cadetblue};
  display: flex;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  padding: 16px;
  font-weight: bold;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  min-height: 80px;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  padding: 20px;
  text-align: center;
  white-space: pre-wrap;
`;
