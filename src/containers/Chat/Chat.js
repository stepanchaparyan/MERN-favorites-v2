import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams, useHistory } from 'react-router-dom';

function Chat() {
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
    const url = 'http://localhost:4000';
    const socket = io(url, { transports: ['websocket', 'polling', 'flashsocket'] });
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
    setNewMessage([...messages, messageEvent]);
  };

  const handleUserLeft = (user, messages) => {
    const messageEvent = {
      user,
      isUserLeft: true
    };
    setNewMessage([...messages, messageEvent]);
  };

  console.log(messages);

  return (
    <div>
      <div>
        <div>
          <button type="submit" onClick={leaveChat}>
            Leave chat
          </button>
        </div>
        <div>
          <div>
            {messages.length ? (
              messages.map(message => {
                if (message.isUserJoined) {
                  return (
                    <div key={Math.random()}>
                      <div>
                        <div>
                          <span>{`${message.user.name} joined the chat`}</span>
                        </div>
                      </div>
                    </div>
                  );
                } else if (message.isUserLeft) {
                  return (
                    <div key={Math.random()}>
                      <div>
                        <div>
                          <span>{`${message.user.name} left the chat`}</span>
                        </div>
                      </div>
                    </div>
                  );
                } else if (parseInt(message.userId) === parseInt(user.id)) {
                  return (
                    <div key={Math.random()}>
                      <div>
                        <div>
                          <div>
                            <div>{message.text}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={Math.random()}>
                      <div>11{message.userName}</div>
                      <div>
                        <div>22{message.text}</div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div>No Messages yet</div>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="text"
            row="5"
            onChange={event => handleMessageTextChange(event)}
            placeholder="Tyoe your message"
            vale={newMessage}
          />
          <div>
            <button type="submit" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
