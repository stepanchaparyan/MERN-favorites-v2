import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/authContext/authContext';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Logo,
  NavLinks,
  LinkStyled,
  UserName,
  SubPages,
  Logout,
  Flag,
  Hamburger,
  FlagContainer
} from './NavbarStyled';
import logo from '../../../assets/logo.png';
import hamburger from '../../../assets/hamburger.png';
import localization from './localization';
import armFlag from '../../../assets/arm.png';
import usaFlag from '../../../assets/usa.png';
import { LINK, LANGUAGES } from '../../../constants';
import { useOnClickOutside } from '../../hooks/clickOutSide';
import Loading from '../../../components/Loading/Loading';

const { ARMENIAN, ENGLISH } = LANGUAGES;

const Navbar = ({ changeLocale }) => {
  const { logout, user, isAuthencated, loading, clearErrors } = useContext(AuthContext);
  const { profile, getProfile } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const { formatMessage } = useIntl();
  const alt = 'logo';
  const node = useRef();

  useEffect(() => {
    getProfile();
  }, []);

  const myProfile = profile && profile[0];

  useOnClickOutside(node, () => setOpen(false));

  const toggle = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    logout();
    clearErrors();
  };

  const authLinks = (
    <NavLinks open={open}>
      <LinkStyled to={`${LINK.TO.HOME}`}>
        <SubPages>{formatMessage(localization.cards)}</SubPages>
      </LinkStyled>
      <LinkStyled to={`${LINK.TO.PRODUCTS}`}>
        <SubPages>{formatMessage(localization.products)}</SubPages>
      </LinkStyled>
      <LinkStyled to={LINK.TO.PROFILE_PAGE}>
        <UserName>{myProfile ? myProfile?.name : user?.name}</UserName>
      </LinkStyled>
      <FlagContainer>
        <Flag src={armFlag} onClick={() => changeLocale(ARMENIAN)}></Flag>
        <Flag src={usaFlag} onClick={() => changeLocale(ENGLISH)}></Flag>
      </FlagContainer>
      <Logout onClick={onLogout}>{formatMessage(localization.logout)}</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks open={open}>
      <FlagContainer>
        <Flag src={armFlag} onClick={() => changeLocale(LANGUAGES.ARMENIAN)}></Flag>
        <Flag src={usaFlag} onClick={() => changeLocale(LANGUAGES.ENGLISH)}></Flag>
      </FlagContainer>
      <LinkStyled to={LINK.TO.REGISTER}>{formatMessage(localization.signUp)}</LinkStyled>
      <LinkStyled to={LINK.TO.LOGIN}>{formatMessage(localization.logIn)}</LinkStyled>
    </NavLinks>
  );

  return (
    <Container ref={node}>
      <Link to={LINK.TO.WELCOME}>
        <Logo src={logo} alt={alt} />
      </Link>
      {loading ? (
        <Loading type="ThreeDots" color="black" height={20} width={60} isNavbar></Loading>
      ) : isAuthencated ? (
        authLinks
      ) : (
        favItemLinks
      )}
      <Hamburger src={hamburger} onClick={toggle}></Hamburger>
    </Container>
  );
};

Navbar.propTypes = {
  changeLocale: PropTypes.func
};

export default Navbar;
