import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Formik, ErrorMessage } from 'formik';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Module,
  FormStyled,
  FieldStyled,
  StyledSelectField,
  Option,
  DefaultOption,
  ProfileData,
  Text,
  DatePickerStyled,
  UpdateButton,
  CancelButton,
  ErrorMessages,
} from './ProfileFormStyled';
import localization from './localization';
import { FORM } from '../../../constants';
import profileFormFormikProps from './ProfileFormFormikProps';
const { INPUT, SELECT, TEL_PLACEHOLDER } = FORM;

const ProfileForm = () => {
  const context = useContext(ProfileContext);
  const { formatMessage } = useIntl();

  const { updateProfile, editProfile, toggle_Form, toggleForm } = context;

  const [newProfile, setProfile] = useState(editProfile);

  useEffect(() => {
    setProfile(editProfile);
  }, [context]);

  const onSubmit = data => {
    updateProfile(data);
    toggle_Form(!toggleForm);
  };

  const cancelEdit = () => {
    toggle_Form(!toggleForm);
  };

  const { validationSchema, validateOnChange, initialValues } = useMemo(() => profileFormFormikProps(newProfile), [newProfile]);

  return (
    <Container>
      <Module>
        <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnChange={validateOnChange} onSubmit={onSubmit}>
          {({ handleChange, setFieldValue, values }) => (
            <FormStyled>
              <ProfileData>
                <Text>{formatMessage(localization.name)}:</Text>
                <FieldStyled type={INPUT.TYPE.TEXT} name={INPUT.NAME.NAME} id={INPUT.NAME.NAME} />
              </ProfileData>
              <ErrorMessage name={INPUT.NAME.NAME} component={ErrorMessages} />
              <ProfileData>
                <Text>{formatMessage(localization.surname)}:</Text>
                <FieldStyled type={INPUT.TYPE.TEXT} name={INPUT.NAME.SURNAME} id={INPUT.NAME.SURNAME} />
              </ProfileData>
              <ErrorMessage name={INPUT.NAME.SURNAME} component={ErrorMessages} />
              <ProfileData>
                <Text>{formatMessage(localization.email)}:</Text>
                <FieldStyled type={INPUT.TYPE.EMAIL} name={INPUT.NAME.EMAIL} id={INPUT.NAME.EMAIL} />
              </ProfileData>
              <ErrorMessage name={INPUT.NAME.EMAIL} component={ErrorMessages} />
              <ProfileData>
                <Text>{formatMessage(localization.selectGender)}:</Text>
                <StyledSelectField as={INPUT.TYPE.SELECT} name={SELECT.NAME.GENDER} id={SELECT.NAME.GENDER} onChange={handleChange}>
                  <DefaultOption>{values.gender}</DefaultOption>
                  <Option value={SELECT.VALUES.MALE}>{formatMessage(localization.male)}</Option>
                  <Option value={SELECT.VALUES.FEMALE}>{formatMessage(localization.female)}</Option>
                </StyledSelectField>
              </ProfileData>
              <ProfileData>
                <Text>{formatMessage(localization.birthday)}:</Text>
                <DatePickerStyled
                  selected={Date.parse(values.birthDay)}
                  onChange={date => setFieldValue(SELECT.NAME.BIRTHDAY, date)}
                  name={SELECT.NAME.BIRTHDAY}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode='select'
                />
              </ProfileData>
              <ProfileData>
                <Text>{formatMessage(localization.phone)}:</Text>
                <FieldStyled type={INPUT.TYPE.TEL} name={INPUT.NAME.PHONE_NUMBER} id={INPUT.NAME.PHONE_NUMBER} placeholder={TEL_PLACEHOLDER} />
              </ProfileData>
              <ErrorMessage name={INPUT.NAME.PHONE_NUMBER} component={ErrorMessages} />
              <UpdateButton> {formatMessage(localization.update)}</UpdateButton>
              <CancelButton onClick={cancelEdit}>{formatMessage(localization.cancel)}</CancelButton>
            </FormStyled>
          )}
        </Formik>
      </Module>
    </Container>
  );
};
export default ProfileForm;
