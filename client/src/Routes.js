import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Welcome from './components/pages/Welcome/Welcome';
import Profile from './components/pages/Profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthContext from './context/authContext/authContext';

const App = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <PrivateRoute exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/profilePage" component={Profile} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
