import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AuthContext from '../../context/authContext/authContext';
import ProfileContext from '../../context/profileContext/profileContext';
import { Container, Logo, NavLinks, LinkStyled, UserName, SubPages, Logout, Hamburger, FlagContainer, ReactFlagsSelectStyled } from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import localization from './localization';
import { LINK } from '../../constants';
import { useOnClickOutside } from '../..//hooks/clickOutSide';
import Loading from '../Loading/Loading';
import { languageTransformer, setLanguage, changeToCountyUpperCode } from '../../utils/languageTransformer';

const Navbar = ({ setLocale, myLocale }) => {
  const { logout, isAuthencated, loading, clearErrors } = useContext(AuthContext);
  const { profile, getProfile } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const { formatMessage } = useIntl();
  const alt = 'logo';
  const node = useRef();

  const languagesList = ['en', 'es', 'de', 'fr', 'ru', 'hy']; // will delete later

  useEffect(() => {
    if (isAuthencated) getProfile();
  }, [isAuthencated]);

  const myProfile = profile && profile[0];

  useOnClickOutside(node, () => setOpen(false));

  const toggle = () => {
    setOpen(!open);
  };

  const onLogout = () => {
    logout();
    clearErrors();
  };

  const flagsContainer = () => (
    <FlagContainer>
      <ReactFlagsSelectStyled
        countries={languageTransformer(languagesList)}
        customLabels={{
          US: 'English',
          ES: 'Español',
          FR: 'Français',
          DE: 'Deutsch',
          RU: 'Русский',
          AM: 'Հայերեն',
        }}
        selected={changeToCountyUpperCode(myLocale)}
        onSelect={code => setLanguage(code, setLocale)}
        selectedSize={14}
        optionsSize={13}
      />
    </FlagContainer>
  );

  const authLinks = (
    <NavLinks open={open}>
      <LinkStyled to={`${LINK.TO.HOME}`}>
        <SubPages>{formatMessage(localization.cards)}</SubPages>
      </LinkStyled>
      <LinkStyled to={`${LINK.TO.PRODUCTS}`}>
        <SubPages>{formatMessage(localization.products)}</SubPages>
      </LinkStyled>
      <LinkStyled to={LINK.TO.PROFILE_PAGE}>
        <UserName>{myProfile?.name}</UserName>
      </LinkStyled>
      {flagsContainer()}
      <Logout onClick={onLogout}>{formatMessage(localization.logout)}</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks open={open}>
      {flagsContainer()}
      <LinkStyled to={LINK.TO.REGISTER}>{formatMessage(localization.signUp)}</LinkStyled>
      <LinkStyled to={LINK.TO.LOGIN}>{formatMessage(localization.logIn)}</LinkStyled>
    </NavLinks>
  );

  return (
    <Container ref={node}>
      <Link to={LINK.TO.WELCOME}>
        <Logo src={logo} alt={alt} />
      </Link>
      {loading ? <Loading type='ThreeDots' color='black' height={20} width={60} isNavbar></Loading> : isAuthencated ? authLinks : favItemLinks}
      <Hamburger src={hamburger} onClick={toggle}></Hamburger>
    </Container>
  );
};

Navbar.propTypes = {
  setLocale: PropTypes.func,
  myLocale: PropTypes.string,
};

export default Navbar;
