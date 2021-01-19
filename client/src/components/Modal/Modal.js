import React from 'react';
import PropTypes from 'prop-types';
import {
  customStyles,
  ButtonConfirm,
  ButtonClose,
  ButtonCancel,
  ModalContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalTextContainer,
  ModalButtonsContainer
} from './ModalStyled';
import Modal from 'react-modal';
import { MODAL } from '../../constants';

const { CONTENT_LABEL, X, DEFAULT_PROPS, NOOP } = MODAL;

const CustomModal = ({
  modalIsOpen,
  closeModal,
  onConfirm,
  title,
  text,
  buttonConfirmText,
  buttonCancelText,
  titleBgColor,
  cancelButtonColor
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={CONTENT_LABEL}
    >
      <ModalContainer>
        <ModalTitleContainer bgColor={titleBgColor}>
          <ModalTitle>{title}</ModalTitle>
          <ButtonClose onClick={closeModal} bgColor={titleBgColor}>
            {X}
          </ButtonClose>
        </ModalTitleContainer>
        <ModalTextContainer>{text}</ModalTextContainer>
        <ModalButtonsContainer>
          {buttonConfirmText && (
            <ButtonConfirm onClick={onConfirm}>{buttonConfirmText}</ButtonConfirm>
          )}
          <ButtonCancel onClick={closeModal} color={cancelButtonColor}>
            {buttonCancelText}
          </ButtonCancel>
        </ModalButtonsContainer>
      </ModalContainer>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonConfirmText: PropTypes.string,
  buttonCancelText: PropTypes.string,
  titleBgColor: PropTypes.string,
  cancelButtonColor: PropTypes.string
};

CustomModal.defaultProps = {
  onConfirm: NOOP,
  title: DEFAULT_PROPS.TITLE,
  text: DEFAULT_PROPS.PLEASE_CONFIRM,
  buttonConfirmText: DEFAULT_PROPS.CONFIRM,
  buttonCancelText: DEFAULT_PROPS.CANCEL
};

export default CustomModal;
