import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from './Routes';
import AuthState from './context/authContext/AuthState';
import FavItemState from './context/favItemContext/favItemState';
import ProfileState from './context/profileContext/profileState';
import setAuthToken from './utils/setAuthToken';
import theme from '../src/styles/theme';
import messages_hy from './translations/hy.json';
import messages_en from './translations/en.json';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const messages = {
  hy: messages_hy,
  en: messages_en
};
let locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  'en-US';
locale = locale.split(/[-_]/)[0]; // language without region code

const App = () => {
  const [myLocale, setLocale] = useState(locale);
  const changeLocale = lang => {
    setLocale(lang);
  };

  return (
    <IntlProvider locale={myLocale} messages={messages[myLocale]}>
      <ThemeProvider theme={theme}>
        <AuthState>
          <FavItemState>
            <ProfileState>
              <Router>
                <div>
                  <Navbar changeLocale={changeLocale} />
                  <Routes />
                  <Footer />
                </div>
              </Router>
            </ProfileState>
          </FavItemState>
        </AuthState>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
