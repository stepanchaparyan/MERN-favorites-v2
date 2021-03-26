import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../context/authContext/authContext';
import { LINK } from '../constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthencated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthencated && !loading ? <Redirect to={LINK.TO.LOGIN} /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
