import React, { useContext, useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import AuthContext from '../../context/authContext/authContext';
import {
  Container,
  Title,
  LoginButton,
  QuestionText,
  FormStyled,
  FieldStyled,
  ErrorMessages,
  Errors,
  ErrorButton
} from './LoginStyled';
import localization from './localization';
import { FORM, LINK } from '../../constants';
import loginFormFormikProps from './LoginFormFormikProps';
import Loading from '../Loading/Loading';

const { INPUT } = FORM;

const Login = props => {
  const { login, isAuthencated, error, clearErrors, loading } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    const urlFrom = localStorage.getItem('from');
    if (isAuthencated) {
      props.history.push(urlFrom);
    }
    clearErrors();
  }, [isAuthencated, props.history]);

  const onSubmit = ({ email, password }) => {
    clearErrors();
    login({
      email,
      password
    });
  };

  const { validationSchema, initialValues } = useMemo(() => loginFormFormikProps(), []);

  return (
    <Container>
      {loading ? (
        <Loading type="ThreeDots" color="cadetblue" height={580} width={80}></Loading>
      ) : (
        <>
          <Title>{formatMessage(localization.login)}</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <FormStyled>
              <FieldStyled
                type={INPUT.TYPE.EMAIL}
                name={INPUT.NAME.EMAIL}
                id={INPUT.NAME.EMAIL}
                placeholder={formatMessage(localization.email)}
              />
              <ErrorMessage name={INPUT.NAME.EMAIL} component={ErrorMessages} />
              <FieldStyled
                type={INPUT.TYPE.PASSWORD}
                name={INPUT.NAME.PASSWORD}
                id={INPUT.NAME.PASSWORD}
                placeholder={formatMessage(localization.password)}
              />
              <ErrorMessage name={INPUT.NAME.PASSWORD} component={ErrorMessages} />
              <LoginButton type={INPUT.TYPE.SUBMIT}>
                {formatMessage(localization.login)}
              </LoginButton>
              {error && (
                <Errors>
                  <ErrorButton type={INPUT.TYPE.BUTTON} onClick={() => clearErrors()}>
                    {error}
                  </ErrorButton>
                </Errors>
              )}
            </FormStyled>
          </Formik>
          <QuestionText>
            {formatMessage(localization.dontHaveAnAccout)} &nbsp;
            <Link to={LINK.TO.REGISTER}>{formatMessage(localization.signup)}</Link>
          </QuestionText>
        </>
      )}
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
