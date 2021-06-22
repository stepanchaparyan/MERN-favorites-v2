import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Join from '../Modal/Join';
import logo from '../../assets/avatar.jpg';
// import './index.scss';

function Dashboard() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [isJoinModalShown, setIsJoinModalShown] = useState(false);
  const [isSubmitDone, setIsSubmitDone] = useState(false);

  const openJoinModal = () => {
    setUserName('');
    setIsJoinModalShown(true);
    setIsSubmitDone(false);
  };

  const handleNameChange = event => {
    const {
      target: { value }
    } = event;
    setUserName(value);
  };

  const generateId = () => {
    return Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111;
  };

  const joinChat = () => {
    setIsSubmitDone(true);
    if (userName.length > 0) {
      const id = generateId();
      history.push(`/chat/${id}/${userName}`);
    }
  };

  return (
    <div>
      <div>
        <img src={logo} alt="" width="80" />
      </div>
      <div>
        <div>
          <button onClick={openJoinModal}>Join Chat</button>
        </div>
      </div>
      {isJoinModalShown && (
        <Join
          userName={userName}
          handleNameChange={handleNameChange}
          closeModal={() => setIsJoinModalShown(false)}
          isSubmitDone={isSubmitDone}
          joinChat={joinChat}
        />
      )}
    </div>
  );
}

export default Dashboard;
