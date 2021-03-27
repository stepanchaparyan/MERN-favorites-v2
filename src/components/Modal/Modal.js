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
  cancelButtonColor,
  children,
  isBigSize,
  shouldShowFooter
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={CONTENT_LABEL}
      ariaHideApp={false}
    >
      <ModalContainer isBigSize={isBigSize}>
        <ModalTitleContainer bgColor={titleBgColor}>
          <ModalTitle>{title}</ModalTitle>
          <ButtonClose onClick={closeModal} bgColor={titleBgColor}>
            {X}
          </ButtonClose>
        </ModalTitleContainer>
        {text && <ModalTextContainer>{text}</ModalTextContainer>}
        {children}
        {shouldShowFooter && (
          <ModalButtonsContainer>
            <ButtonCancel onClick={closeModal} color={cancelButtonColor}>
              {buttonCancelText}
            </ButtonCancel>
            {buttonConfirmText && (
              <ButtonConfirm onClick={onConfirm}>{buttonConfirmText}</ButtonConfirm>
            )}
          </ModalButtonsContainer>
        )}
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
  cancelButtonColor: PropTypes.string,
  children: PropTypes.node,
  isBigSize: PropTypes.bool,
  shouldShowFooter: PropTypes.bool
};

CustomModal.defaultProps = {
  onConfirm: NOOP,
  title: DEFAULT_PROPS.TITLE,
  text: DEFAULT_PROPS.PLEASE_CONFIRM,
  buttonConfirmText: DEFAULT_PROPS.CONFIRM,
  buttonCancelText: DEFAULT_PROPS.CANCEL,
  isBigSize: false,
  shouldShowFooter: true
};

export default CustomModal;
