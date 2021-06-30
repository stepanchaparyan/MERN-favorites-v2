import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams, useHistory } from 'react-router-dom';
import { URL, CHAT_EVENTS } from '../../constants';
import {
  Container,
  Wrapper,
  MessageContainer,
  Messages,
  NoMessages,
  TextAreaContainer,
  TextareaStyled,
  ButtonContainer,
  SendButton,
  LeaveButton,
  JoinAndLeftMessage,
  UserName,
  MyMessageContainer,
  MyMessage,
  OtherMessageContainer,
  OtherMessagerName,
  OtherMessage
} from './ChatStyled.js';
const { CHAT } = URL;
const { JOIN, MESSAGE_RECEIVED, USER_JOINED, LEAVE_CHAT, SEND_MESSAGE } = CHAT_EVENTS;

const Chat = () => {
  const params = useParams();
  const history = useHistory();

  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({ id: '', name: '' });
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const scroll = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight;
    messagesEndRef.current.scrollTo(0, scroll);
  };

  useEffect(scrollToBottom, [messages, newMessage]);

  useEffect(() => {
    const { userId, userName } = params;
    const user = { id: userId, name: userName };
    setUser(user);

    // Subscribe to socket
    const socket = io(CHAT, { transports: ['websocket', 'polling', 'flashsocket'] });
    setSocket(socket);

    // Join to chat room
    socket.emit(JOIN, { user });

    // Handle events
    socket.on(MESSAGE_RECEIVED, message => handleMessageReceived(message));
    // User joined
    socket.on(USER_JOINED, user => handleUserJoined(user));
    // User left
    socket.on(LEAVE_CHAT, user => handleUserLeft(user));
  }, []);

  const handleMessageTextChange = event => {
    const {
      target: { value }
    } = event;
    setNewMessage(value);
  };

  const sendMessage = () => {
    const message = {
      text: newMessage,
      userId: user.id,
      userName: user.name
    };
    setMessages(prevValue => [...prevValue, message]);
    setNewMessage('');
    socket.emit(SEND_MESSAGE, { message });
  };

  const leaveChat = () => {
    socket.emit(LEAVE_CHAT, { user });
    socket.off();
    history.push('/');
  };

  // Handle socket events
  const handleMessageReceived = message => {
    setMessages(prevValue => [...prevValue, message]);
  };

  const handleUserJoined = user => {
    const messageEvent = {
      user,
      isUserJoined: true
    };
    setMessages(prevValue => [...prevValue, messageEvent]);
  };

  const handleUserLeft = user => {
    const messageEvent = {
      user,
      isUserLeft: true
    };
    setMessages(prevValue => [...prevValue, messageEvent]);
  };

  return (
    <Container>
      <Wrapper>
        <ButtonContainer>
          <LeaveButton onClick={leaveChat}>Leave the chat</LeaveButton>
        </ButtonContainer>
        <MessageContainer>
          <Messages ref={messagesEndRef}>
            {messages.length ? (
              messages.map((message, i) => {
                if (message.isUserJoined) {
                  return (
                    <JoinAndLeftMessage>
                      <UserName>{`${message.user.name}`}</UserName>
                      <span>Joined the chat</span>
                    </JoinAndLeftMessage>
                  );
                } else if (message.isUserLeft) {
                  return (
                    <JoinAndLeftMessage>
                      <UserName>{`${message.user.name}`}</UserName>
                      <span>Left the chat</span>
                    </JoinAndLeftMessage>
                  );
                } else if (parseInt(message.userId) === parseInt(user.id)) {
                  return (
                    <MyMessageContainer>
                      <MyMessage>{message.text}</MyMessage>
                    </MyMessageContainer>
                  );
                } else {
                  return (
                    <OtherMessageContainer>
                      {messages[i].userName !== messages[i - 1].userName && (
                        <OtherMessagerName>{message.userName}</OtherMessagerName>
                      )}
                      <OtherMessage>{message.text}</OtherMessage>
                    </OtherMessageContainer>
                  );
                }
              })
            ) : (
              <NoMessages>No Messages yet</NoMessages>
            )}
          </Messages>
        </MessageContainer>
        <TextAreaContainer>
          <TextareaStyled
            name="text"
            row="5"
            onChange={event => handleMessageTextChange(event)}
            placeholder="Type your message"
            value={newMessage}
          />
          <ButtonContainer>
            <SendButton onClick={sendMessage} disabled={!newMessage}>
              Send
            </SendButton>
          </ButtonContainer>
        </TextAreaContainer>
      </Wrapper>
    </Container>
  );
};

export default Chat;
