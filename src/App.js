import React, { useState } from 'react';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
  const history = useHistory();
  const [myLocale, setLocale] = useState(localStorage.getItem('locale') || locale);
  localStorage.setItem('locale', myLocale);

  return (
    <HelmetProvider>
      <Helmet>
        <title>My favorite items</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Favorite cards page" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, cards, favorites" />
        <meta name="author" content="Stepan Chaparyan" />
      </Helmet>
      <IntlProvider locale={myLocale} messages={messages[myLocale]}>
        <ThemeProvider theme={theme}>
          <AuthState>
            <FavItemState>
              <ProfileState>
                <Router history={history}>
                  <div>
                    <Navbar setLocale={setLocale} myLocale={myLocale} />
                    <Routes />
                    <Footer />
                  </div>
                </Router>
              </ProfileState>
            </FavItemState>
          </AuthState>
        </ThemeProvider>
      </IntlProvider>
    </HelmetProvider>
  );
};

export default App;
