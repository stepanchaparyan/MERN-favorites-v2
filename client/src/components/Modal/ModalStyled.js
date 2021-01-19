import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    width: '350px',
    height: '200px',
    backgroundColor: '#f8f8f8'
  }
};

export const ButtonConfirm = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 12px;
  padding: 8px;
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
  margin: 12px;
  padding: 8px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  border-top: 1px solid lightGray;
  width: 94%;
  margin: 0 3%;
`;
