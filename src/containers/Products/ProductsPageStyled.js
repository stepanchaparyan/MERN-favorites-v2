import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import { tabletUp, desktopUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding-bottom: 60px;
`;

export const FormContainer = styled.div`
  margin: 24px 24px 0 24px;
`;

export const AddProduct = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 8px auto;
  text-align: center;
  color: ${props => props.theme.cadetblue};
  cursor: pointer;
  ${tabletUp`
    width: 33%;
    margin: 0 auto;
  `};
`;

export const Context = styled.div`
  margin: 8px 24px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${tabletUp`
    grid-template-columns: repeat(2, 1fr);
    margin: 24px;
  `};
  ${desktopUp`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export const StyledLink = styled(Link)`
  display: flex;
  background: #333;
  padding: 2px 10px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  :hover {
    background: ${props => props.theme.cadetblue};
  }
`;

export const CardCount = styled.p`
  width: 25px;
  height: 25px;
  display: flex;
  background-color: #f4f4f4;
  border-radius: 50%;
  color: #171717;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.p`
  display: flex;
  padding-right: 10px;
  margin: auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding: 8px 24px 0;
  justify-content: flex-end;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const FieldStyled = styled(Field)`
  border: 0px;
  border-bottom: 1px solid ${props => props.theme.cadetblue};
  width: 50%;
  padding: 7px 10px;
  margin: 2px;
  outline: none;
  ${tabletUp`
    width: 45%;
  `};
`;

export const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;
