import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { tabletUp } from '../../../styles/mediaQueries/mixins';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 22px 16px 22px;
  font-weight: 600;
  font-size: 24px;
  background-color: ${props => props.theme.lightGray};
  border-radius: 4px;
  ${tabletUp`
    padding: 0 32px 50px 32px;
  `};
  .react-datepicker-popper {
    left: -48px !important;
  }
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 50%;
`;

export const WelcomeText = styled.div`
  font-size: 40px;
  padding: 16px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 32px;
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 80px;
  right: 60px;
`;

export const LoadingMessage = styled.h3`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
`;

export const TextData = styled.div`
  background: whiteSmoke;
  border: 1px solid cadetBlue;
  width: 85%;
`;

export const ProfileData = styled.div`
  display: flex;
  font-size: 20px;
  padding: 8px 8px 0;
  width: 100%;
  align-items: center;
`;

export const Text = styled.div`
  color: black;
  width: 30%;
  font-size: 14px;
  ${tabletUp`
    width: 40%;
    font-size: 16px;
  `};
`;

export const Data = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  width: 50%;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  border: 0;
  width: 150px;
  padding: 4px 8px;
  margin: 0;
  outline: none;
  border-radius: 4px;
  ${tabletUp`
    width: 200px;
    padding: 8px 10px;
    margin: 4px;
  `};
`;

export const UpdateButton = styled.button`
  border: 0;
  padding: 4px 8px;
  margin: 0;
  outline: none;
  border-radius: 4px;
  width: 70%;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  ${tabletUp`
    width: 90%;
    padding: 8px 10px;
    margin: 16px 4px 4px;
  `};
`;

export const CancelButton = styled.button`
  border: 0;
  padding: 4px 8px;
  margin: 0;
  outline: none;
  border-radius: 4px;
  width: 70%;
  background-color: gray;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  ${tabletUp`
    width: 90%;
    padding: 8px 10px;
    margin: 4px;
  `};
`;

export const StyledSelectField = styled(Field)`
  width: 166px;
  background: white;
  height: 22px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 6px;
  margin: 0;
  ${tabletUp`
    width: 220px;
    height: 30px;
    margin: 4px;
  `};
`;

export const Option = styled.option`
  height: 47px;
  padding: 20px;
  font-size: 18px;
  color: ${props => props.theme.cadetblue};
`;

export const DefaultOption = styled.option`
  display: none;
`;

export const DatePickerStyled = styled(DatePicker)`
  width: 155px;
  height: 22px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 8px;
  margin: 0;
  ${tabletUp`
    width: 190px;
    height: 30px;
    margin: 4px;
  `};
`;

export const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
  margin-left: -10px;
`;
