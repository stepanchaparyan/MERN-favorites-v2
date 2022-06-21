import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { NOOP } from '../../../constants';
import { Container, ButtonStyled, InputContainer, InputStyled, RequiredText } from './JoinStyled';
import localization from '../localization';

const Join = ({ closeModal, userName, handleNameChange, isSubmitDone, joinChat }) => {
  const { formatMessage } = useIntl();

  return (
    <Container closeModal={closeModal}>
      <InputContainer>
        <InputStyled type='text' placeholder='Your name' value={userName} onChange={handleNameChange} />
        {isSubmitDone && !userName.length && <RequiredText>{formatMessage(localization.nameIsRequired)}</RequiredText>}
      </InputContainer>
      <ButtonStyled onClick={joinChat}>{formatMessage(localization.join)}</ButtonStyled>
    </Container>
  );
};

Join.propTypes = {
  closeModal: PropTypes.func,
  userName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  isSubmitDone: PropTypes.bool,
  joinChat: PropTypes.func.isRequired,
};

Join.defaultProps = {
  closeModal: NOOP,
  isSubmitDone: false,
};

export default Join;
