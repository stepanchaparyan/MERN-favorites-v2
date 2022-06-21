import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { FooterContainer, ModalButtonsContainer, ButtonCancel, ButtonConfirm } from './ModalStyled';
import { NOOP } from '../../constants';

const ModalFooter = ({
  isPrimaryButtonDisabled,
  primaryButtonCallBack,
  primaryButtonMessage,
  secondaryButtonCallBack,
  secondaryButtonMessage,
  isSecondaryButtonDisabled,
}) => {
  const { formatMessage } = useIntl();

  return (
    <FooterContainer>
      <ModalButtonsContainer>
        {secondaryButtonMessage && (
          <ButtonCancel disabled={isSecondaryButtonDisabled} onClick={secondaryButtonCallBack}>
            {formatMessage(secondaryButtonMessage)}
          </ButtonCancel>
        )}
        {primaryButtonMessage && (
          <ButtonConfirm disabled={isPrimaryButtonDisabled} onClick={primaryButtonCallBack}>
            {formatMessage(primaryButtonMessage)}
          </ButtonConfirm>
        )}
      </ModalButtonsContainer>
    </FooterContainer>
  );
};

ModalFooter.propTypes = {
  isPrimaryButtonDisabled: PropTypes.bool,
  primaryButtonCallBack: PropTypes.func,
  primaryButtonMessage: PropTypes.object,
  secondaryButtonCallBack: PropTypes.func,
  secondaryButtonMessage: PropTypes.object,
  isSecondaryButtonDisabled: PropTypes.bool,
};

ModalFooter.defaultProps = {
  isPrimaryButtonDisabled: false,
  primaryButtonCallBack: NOOP,
  primaryButtonMessage: null,
  secondaryButtonCallBack: NOOP,
  secondaryButtonMessage: null,
  isSecondaryButtonDisabled: false,
};

export default ModalFooter;
