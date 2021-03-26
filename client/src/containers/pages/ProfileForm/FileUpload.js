import React, { useState, useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import Progress from '../../../components/Progress/Progress';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Input,
  InputHidden,
  ProfileImage,
  LabelEdit,
  LabelUpload,
  IconEdit,
  Filename
} from './FileUploadStyled';
import EditIcon from '../../../assets/icon-edit.png';
import UploadIcon from '../../../assets/icon-upload.png';
import Modal from 'react-modal';
import CustomModal from '../../../components/Modal/Modal';
import localization from './localization';
import theme from '../../../styles/theme';
import { FORM, FILE_UPLOAD, MODAL } from '../../../constants';

const { cadetblue, indianred } = theme;
const { FILE_TYPE, MODAL_TYPE, HTML_FOR } = FILE_UPLOAD;
const { INPUT } = FORM;
const { OK } = MODAL;

const FileUpload = () => {
  const context = useContext(ProfileContext);
  const {
    updateProfile,
    editProfile,
    update_File,
    uploadedFile,
    remove_file,
    uploadPercentage
  } = context;
  const { formatMessage } = useIntl();

  Modal.setAppElement('#root');
  const [newProfile, setProfile] = useState(editProfile);
  const { image } = newProfile;
  const [file, setFile] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [filename, setFilename] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProfile(editProfile);
  }, []);

  const onChange = e => {
    if (
      e.target.files[0].type === FILE_TYPE.IMAGE_JPEG ||
      e.target.files[0] === FILE_TYPE.IMAGE_PNG
    ) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    } else {
      setIsOpen(true);
      setModalType(MODAL_TYPE.FILE_TYPE);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    update_File(formData);
  };

  const setImage = () => {
    setProfile({
      ...newProfile,
      image: filename
    });
    setIsOpen(true);
    setModalType(MODAL_TYPE.CONFIRM);
  };

  const onConfirm = () => {
    updateProfile(newProfile);
    remove_file();
    setFilename(null);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProfile({
      ...newProfile,
      image: editProfile.image
    });
    remove_file();
  };

  const closeFileTypeModal = () => {
    setIsOpen(false);
    remove_file();
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <ProfileImage src={require(`../../../assets/${image}`)} />
        <LabelEdit htmlFor={HTML_FOR.FILE_EDIT}>
          <IconEdit src={EditIcon}></IconEdit>
        </LabelEdit>
        <InputHidden id={HTML_FOR.FILE_EDIT} type={INPUT.TYPE.FILE} onChange={e => onChange(e)} />
        {modalType === MODAL_TYPE.FILE_TYPE && (
          <CustomModal
            closeModal={closeFileTypeModal}
            modalIsOpen={modalIsOpen}
            buttonConfirmText={null}
            buttonCancelText={OK}
            title={formatMessage(localization.wrongExtension)}
            text={formatMessage(localization.wrongExtensionText)}
            titleBgColor={indianred}
            cancelButtonColor={cadetblue}
          ></CustomModal>
        )}
        <Filename>{filename}</Filename>

        {filename && !uploadedFile && (
          <>
            <Progress percentage={uploadPercentage} />
            <LabelUpload htmlFor={HTML_FOR.FILE_UPLOAD}>
              <IconEdit src={UploadIcon}></IconEdit>
              {formatMessage(localization.upload)}
            </LabelUpload>
            <InputHidden id={HTML_FOR.FILE_UPLOAD} type={INPUT.TYPE.SUBMIT} />
          </>
        )}
      </form>
      {uploadedFile && (
        <Input
          type={INPUT.TYPE.BUTTON}
          value={formatMessage(localization.updateImage)}
          onClick={setImage}
        />
      )}
      {modalType === MODAL_TYPE.CONFIRM && (
        <CustomModal
          closeModal={closeModal}
          onConfirm={onConfirm}
          modalIsOpen={modalIsOpen}
          title={formatMessage(localization.confirm)}
          text={formatMessage(localization.confirmText)}
        ></CustomModal>
      )}
    </Container>
  );
};

export default FileUpload;
