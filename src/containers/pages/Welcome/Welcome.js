import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  Module,
  WelcomeText,
  LongText,
  LinkStyled,
  Logo,
  Music,
  Films,
  Books,
  Other,
  PieContainer,
  Pie,
  Pie2
} from './WelcomeStyled';
import Img from '../../../assets/elephant.png';
import localization from './localization';
import { LINK } from '../../../constants';

const Welcome = () => {
  const { formatMessage } = useIntl();
  const { isAuthencated } = useContext(AuthContext);

  return (
    <Container>
      <Module>
        <WelcomeText>{formatMessage(localization.welcomeText)}</WelcomeText>
        <LongText>{formatMessage(localization.longText)}</LongText>
        <LongText>
          <Music>{formatMessage(localization.music)}</Music>
          <Films>{formatMessage(localization.films)}</Films>
          <Books>{formatMessage(localization.books)}</Books>
          <Other>{formatMessage(localization.other)}</Other>
        </LongText>
        {isAuthencated && (
          <LinkStyled to={LINK.TO.HOME}>{formatMessage(localization.createYourCard)}</LinkStyled>
        )}
        <Logo src={Img}></Logo>
        <PieContainer>
          <Pie per={10} inherit="inherit">
            <Pie2></Pie2>
          </Pie>
          <Pie per={25} inherit="inherit">
            <Pie2></Pie2>
          </Pie>
          <Pie per={50} inherit="inherit">
            <Pie2></Pie2>
          </Pie>
          <Pie per={75} inherit="none">
            <Pie2></Pie2>
          </Pie>
          <Pie per={95} inherit="none">
            <Pie2></Pie2>
          </Pie>
        </PieContainer>
        <div onClick={() => window.open(require('../../../assets/123.pdf'), '_blank')}>
          Download
        </div>
        {/* <div
          onClick={() =>
            window.open(
              require('https://bucketforfavorites.s3.eu-north-1.amazonaws.com/123.pdf'),
              '_blank'
            )
          }
        >
          Download
        </div> */}
        <a
          href="https://bucketforfavorites.s3.eu-north-1.amazonaws.com/123.pdf"
          download="w3logo.pdf"
        >
          XXXXXXXXXXXXX
        </a>
      </Module>
    </Container>
  );
};

export default Welcome;
