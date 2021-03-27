import React, { useContext, useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  Title,
  RegisterButton,
  QuestionText,
  FormStyled,
  FieldStyled,
  ErrorMessages,
  Errors,
  ErrorButton
} from './RegisterStyled';
import localization from './localization';
import { FORM, LINK } from '../../../constants';
import registerFormFormikProps from './RegisterFormFormikProps';

const { INPUT } = FORM;

const Register = props => {
  const { register, isAuthencated, error, clearErrors } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (isAuthencated) {
      props.history.push('/');
    }
  }, [isAuthencated, props.history]);

  const onSubmit = ({ name, email, password, password2 }) => {
    if (password === password2) {
      register({
        name,
        email,
        password
      });
    }
  };

  const { validationSchema, initialValues } = useMemo(() => registerFormFormikProps(), []);

  return (
    <Container>
      <Title>{formatMessage(localization.signup)}</Title>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <FormStyled>
          <FieldStyled
            type={INPUT.TYPE.TEXT}
            name={INPUT.NAME.NAME}
            id={INPUT.NAME.NAME}
            placeholder={formatMessage(localization.name)}
          />
          <ErrorMessage name={INPUT.NAME.NAME} component={ErrorMessages} />
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
          <FieldStyled
            type={INPUT.TYPE.PASSWORD}
            name={INPUT.NAME.PASSWORD_2}
            id={INPUT.NAME.PASSWORD_2}
            placeholder={formatMessage(localization.confirmPassword)}
          />
          <ErrorMessage name={INPUT.NAME.PASSWORD_2} component={ErrorMessages} />
          {error && (
            <Errors>
              <ErrorButton type={INPUT.TYPE.BUTTON} onClick={() => clearErrors()}>
                {error}
              </ErrorButton>
            </Errors>
          )}
          <RegisterButton type={INPUT.TYPE.SUBMIT} disabled={error}>
            {formatMessage(localization.signup)}
          </RegisterButton>
        </FormStyled>
      </Formik>
      <QuestionText>
        {formatMessage(localization.alreadyHaveAnAccout)} &nbsp;
        <Link to={LINK.TO.LOGIN}>{formatMessage(localization.signin)}</Link>
      </QuestionText>
    </Container>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default Register;
