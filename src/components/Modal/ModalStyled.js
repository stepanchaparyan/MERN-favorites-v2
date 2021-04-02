import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    minWidth: '350px',
    minHeight: '200px',
    backgroundColor: '#f8f8f8',
    position: 'absolute'
  },
  overlay: {
    position: 'absolute',
    top: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  }
};

export const ButtonConfirm = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 12px 0;
  padding: 8px;
  min-width: 120px;
`;

export const ButtonClose = styled.button`
  background-color: ${props => (props.bgColor ? props.bgColor : props.theme.cadetblue)};
  border: 0;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  outline: none;
`;

export const ButtonCancel = styled.button`
  width: 30%;
  border: 0;
  background-color: ${props => (props.color ? props.color : 'lightgrey')};
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 12px 0;
  padding: 8px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.isBigSize ? '450px' : 'auto')};
`;

export const ModalTitleContainer = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : props.theme.cadetblue)};
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  padding: 16px;
  font-weight: bold;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  min-height: 80px;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  padding: 0 4%;
  text-align: center;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightGray;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: 'space-between';
`;

export const FooterContainer = styled.div`
  width: 100%;
`;
