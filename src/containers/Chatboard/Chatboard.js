import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Join from './Join/Join';
import { Container, WelcomeText, ButtonStyled } from './ChatboardStyled';
import localization from './localization';

const Chatboard = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const { formatMessage } = useIntl();
  const [isJoinSectionShown, setIsJoinSectionShown] = useState(false);
  const [isSubmitDone, setIsSubmitDone] = useState(false);

  const openJoinModal = () => {
    setUserName('');
    setIsJoinSectionShown(true);
    setIsSubmitDone(false);
  };

  const handleNameChange = event => {
    const {
      target: { value },
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
    <Container>
      {!isJoinSectionShown ? (
        <WelcomeText>{formatMessage(localization.title)}</WelcomeText>
      ) : (
        <WelcomeText>{formatMessage(localization.enterYourName)}</WelcomeText>
      )}
      {!isJoinSectionShown && <ButtonStyled onClick={openJoinModal}>{formatMessage(localization.joinChat)}</ButtonStyled>}
      {isJoinSectionShown && (
        <Join
          userName={userName}
          handleNameChange={handleNameChange}
          closeModal={() => setIsJoinSectionShown(false)}
          isSubmitDone={isSubmitDone}
          joinChat={joinChat}
        />
      )}
    </Container>
  );
};

export default Chatboard;
