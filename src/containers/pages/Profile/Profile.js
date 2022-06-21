import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';
import ProfileContext from '../../../context/profileContext/profileContext';
import ProfileForm from '../ProfileForm/ProfileForm';
import FileUpload from '../ProfileForm/FileUpload';
import Message from '../../../components/Message/Message';
import moment from 'moment';
import {
  Container,
  Module,
  WelcomeText,
  LinkStyled,
  Logo,
  LoadingMessage,
  ProfileData,
  Info,
  InfoData,
  Text,
  Data,
  ImageContainer,
  ProfileImage,
  Button,
  ReactTooltipStyled,
  Forms,
} from './ProfileStyled';
import Img from '../../../assets/elephant.png';
import localization from './localization';
import { LINK, REACT_TOOLTIP_STYLED } from '../../../constants';
import theme from '../../../styles/theme';

const { PLACE, EFFECT } = REACT_TOOLTIP_STYLED;

const Profile = () => {
  const { cadetblue } = theme;
  let { loading, getProfile, profile, edit_Profile, toggle_Form, toggleForm, message } = useContext(ProfileContext);
  const { formatMessage } = useIntl();
  const { pathname } = useLocation();

  useEffect(() => {
    getProfile();
    localStorage.setItem('from', pathname);
  }, []);

  if (profile === null || profile.length === 0 || profile === undefined) {
    return (
      <>
        {loading ? (
          <LoadingMessage>{formatMessage(localization.loadingProfile)}</LoadingMessage>
        ) : (
          <LoadingMessage>{formatMessage(localization.noAnyProfile)}</LoadingMessage>
        )}
      </>
    );
  }

  profile = profile[0];

  const handleEdit = () => {
    edit_Profile(profile);
    toggle_Form(!toggleForm);
  };

  return (
    <>
      <Helmet title='Profile Page'></Helmet>
      <Container>
        <Module>
          {message ? <Message msg={message} /> : null}
          <WelcomeText>{formatMessage(localization.profilePage)}</WelcomeText>
          {!toggleForm && (
            <>
              <Info>
                <ImageContainer>
                  <ProfileImage src={require(`../../../assets/${profile.image}`)} />
                </ImageContainer>
                <InfoData>
                  <ProfileData>
                    <Text>{formatMessage(localization.name)}:</Text>
                    <Data>{profile.name}</Data>
                  </ProfileData>
                  <ProfileData>
                    <Text>{formatMessage(localization.surname)}:</Text>
                    <Data>{profile.surname}</Data>
                  </ProfileData>
                  <ProfileData>
                    <Text>{formatMessage(localization.email)}:</Text>
                    <Data data-tip={profile.email} data-arrow-color={cadetblue} data-background-color={cadetblue}>
                      {profile.email}
                    </Data>
                  </ProfileData>
                  <ProfileData>
                    <Text>{formatMessage(localization.gender)}:</Text>
                    <Data>{profile.gender}</Data>
                  </ProfileData>
                  <ProfileData>
                    <Text>{formatMessage(localization.birthday)}:</Text>
                    <Data>{moment(profile.birthDay).format('ll')}</Data>
                  </ProfileData>
                  <ProfileData>
                    <Text>{formatMessage(localization.phone)}:</Text>
                    <Data>{profile.phoneNumber}</Data>
                  </ProfileData>
                </InfoData>
              </Info>
              <ReactTooltipStyled place={PLACE.RIGHT} effect={EFFECT.SOLID} />
              <Button onClick={handleEdit}>{formatMessage(localization.editCard)}</Button>
            </>
          )}
          <Forms>
            {toggleForm && <FileUpload />}
            {toggleForm && <ProfileForm />}
          </Forms>
          <LinkStyled to={LINK.TO.WELCOME}>{formatMessage(localization.goHomePage)}</LinkStyled>
          <Logo src={Img}></Logo>
        </Module>
      </Container>
    </>
  );
};
export default Profile;
