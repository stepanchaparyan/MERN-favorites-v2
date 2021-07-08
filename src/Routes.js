import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/pages/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Welcome from './containers/pages/Welcome/Welcome';
import Profile from './containers/pages/Profile/Profile';
import PrivateRoute from './routing/PrivateRoute';
import AuthContext from './context/authContext/authContext';
import Books from './containers/Books/Books';
// import BookDetail from './containers/Books/BookDetail';
import ProductsPage from './containers/Products/ProductsPage';
import ProductDetails from './containers/Products/ProductDetails';
import CardPage from './containers/Products/Card/CardPage';
import Chat from './containers/Chat/Chat';
import Chatboard from './containers/Chatboard/Chatboard';

const Routes = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) loadUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/profilePage" component={Profile} />
      <PrivateRoute exact path="/books" component={Books} />
      <PrivateRoute exact path="/products" component={ProductsPage} />
      <PrivateRoute exact path="/product/:id" component={ProductDetails} />
      <PrivateRoute exact path="/card" component={CardPage} />
      <Route exact path="/chatboard" component={Chatboard} />
      <Route exact path="/chat/:userId/:userName" component={Chat} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
