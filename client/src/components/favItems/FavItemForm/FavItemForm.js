import React, { useContext, useRef, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Formik, ErrorMessage } from 'formik';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import {
  Container,
  Title,
  FormStyled,
  FieldStyled,
  ButtonSubmit,
  CancelButton,
  ErrorMessages,
  StyledSelectField,
  Option,
  DefaultOption
} from './FavItemFormStyled';
import { FORM } from '../../../constants';
import localization from './localization';
import { useOnClickOutside } from '../../hooks/clickOutSide';
import favItemFormFormikProps from './FavItemFormFormikProps';

const { INPUT, SELECT } = FORM;

const FavItemForm = () => {
  const context = useContext(FavItemContext);
  const { addFavItem, editFavItem, clearEdit, update_FavItem, toggle_Form, toggleForm } = context;

  const { formatMessage } = useIntl();
  const container = useRef();
  useOnClickOutside(container, () => toggle_Form(false));

  const onSubmit = data => {
    if (editFavItem === null) {
      addFavItem(data);
    } else {
      update_FavItem(data);
    }
  };

  const cancelEdit = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };

  const { validationSchema, initialValues } = useMemo(() => favItemFormFormikProps(editFavItem), [
    editFavItem
  ]);

  return (
    <Container ref={container}>
      <Title>
        {editFavItem !== null
          ? formatMessage(localization.editFavItem)
          : formatMessage(localization.addNewFavItem)}
      </Title>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <FormStyled>
            <FieldStyled
              type={INPUT.TYPE.TEXT}
              name={INPUT.NAME.AUTHOR}
              id={INPUT.NAME.AUTHOR}
              placeholder={formatMessage(localization.author)}
            />
            <ErrorMessage name={INPUT.NAME.AUTHOR} component={ErrorMessages} />
            <FieldStyled
              type={INPUT.TYPE.TEXT}
              name={INPUT.NAME.TITLE}
              id={INPUT.NAME.TITLE}
              placeholder={formatMessage(localization.title)}
            />
            <ErrorMessage name={INPUT.NAME.TITLE} component={ErrorMessages} />
            <StyledSelectField
              as={INPUT.TYPE.SELECT}
              name={INPUT.NAME.CATEGORY}
              id={INPUT.NAME.CATEGORY}
              placeholder={formatMessage(localization.selectCategory)}
              onChange={handleChange}
            >
              <DefaultOption value={SELECT.VALUES.OTHER}>
                {formatMessage(localization.selectCategory)}
              </DefaultOption>
              <Option value={SELECT.VALUES.FILM}>{formatMessage(localization.films)}</Option>
              <Option value={SELECT.VALUES.MUSIC}>{formatMessage(localization.music)}</Option>
              <Option value={SELECT.VALUES.BOOKS}>{formatMessage(localization.books)}</Option>
              <Option value={SELECT.VALUES.OTHER}>{formatMessage(localization.other)}</Option>
            </StyledSelectField>
            <ErrorMessage name={INPUT.NAME.CATEGORY} component={ErrorMessages} />
            <FieldStyled
              type={INPUT.TYPE.TEXT}
              name={INPUT.NAME.DESCRIPTION}
              id={INPUT.NAME.DESCRIPTION}
              placeholder={formatMessage(localization.description)}
            />
            <ErrorMessage name={INPUT.NAME.DESCRIPTION} component={ErrorMessages} />
            <ButtonSubmit type={INPUT.TYPE.SUBMIT}>
              {editFavItem !== null
                ? formatMessage(localization.update)
                : formatMessage(localization.add)}
            </ButtonSubmit>
            {editFavItem && (
              <CancelButton onClick={cancelEdit}>{formatMessage(localization.cancel)}</CancelButton>
            )}
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default FavItemForm;
