import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  min-width: 500px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px grey;
  padding: 24px;
  position: relative;
`;

export const MessageContainer = styled.div`
  margin: 24px 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Messages = styled.div`
  width: 100%;
`;

export const NoMessages = styled.div`
  color: ${props => props.theme.midGray};
  font-size: 18px;
  text-align: center;
`;

export const TextAreaContainer = styled.div`
  position: absolute;
  bottom: 24px;
`;

export const TextareaStyled = styled.textarea`
  width: 300px;
  height: 70px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SendButton = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  color: white;
  background: ${props => props.theme.cadetblue};
  border-radius: 4px;
  cursor: pointer;
  width: 48px;
`;

export const LeaveButton = styled(SendButton)`
  width: 130px;
`;

export const JoinAndLeftMessage = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

export const MyMessage = styled.div`
  display: flex;
  background: ${props => props.theme.cadetblue};
  padding: 8px 20px 8px 8px;
  margin: 1px 0;
  font-size: 14px;
  letter-spacing: 1px;
  border-radius: 6px 0 6px 6px;
`;

export const MyMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const OtherMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const OtherMessage = styled.div`
  display: flex;
  background: ${props => props.theme.lightGray};
  padding: 8px 20px 8px 8px;
  margin: 1px 0;
  font-size: 14px;
  letter-spacing: 1px;
  border-radius: 0 6px 6px 6px;
  width: fit-content;
`;

export const OtherMessagerName = styled.div`
  font-size: 14px;
`;
