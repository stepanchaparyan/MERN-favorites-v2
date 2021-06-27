import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams, useHistory } from 'react-router-dom';
import { URL } from '../../constants';
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

const Chat = () => {
  const params = useParams();
  const history = useHistory();

  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({ id: '', name: '' });
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messageRef = useRef(messages);

  useEffect(() => {
    const { userId, userName } = params;
    const user = { id: userId, name: userName };
    setUser(user);

    // Subscribe to socket
    const socket = io(CHAT, { transports: ['websocket', 'polling', 'flashsocket'] });
    setSocket(socket);

    // Join to chat room
    socket.emit('join', { user });

    // Handle events
    socket.on('messageReceived', message => handleMessageReceived(message, messageRef.current));
    // User joined
    socket.on('userJoined', user => handleUserJoined(user, messageRef.current));
    // User left
    socket.on('leaveChat', user => handleUserLeft(user, messageRef.current));
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
    socket.emit('sendMessage', { message });
  };

  const leaveChat = () => {
    socket.emit('leaveChat', { user });
    socket.off();
    history.push('/');
  };

  // Handle socket events
  const handleMessageReceived = (message, messages) => {
    setMessages([...messages, message]);
  };

  const handleUserJoined = (user, messages) => {
    const messageEvent = {
      user,
      isUserJoined: true
    };
    setMessages([...messages, messageEvent]);
  };

  const handleUserLeft = (user, messages) => {
    const messageEvent = {
      user,
      isUserLeft: true
    };
    setMessages([...messages, messageEvent]);
  };

  console.log(messages);

  return (
    <Container>
      <Wrapper>
        <ButtonContainer>
          <LeaveButton onClick={leaveChat}>Leave the chat</LeaveButton>
        </ButtonContainer>
        <MessageContainer>
          <Messages>
            {messages.length ? (
              messages.map(message => {
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
                      <OtherMessagerName>{message.userName}</OtherMessagerName>
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
            <SendButton onClick={sendMessage}>Send</SendButton>
          </ButtonContainer>
        </TextAreaContainer>
      </Wrapper>
    </Container>
  );
};

export default Chat;
