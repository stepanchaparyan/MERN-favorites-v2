import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './LoadingStyled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = ({ type, color, height, width, isNavbar }) => {
  return (
    <Container isNavbar={isNavbar}>
      <Loader type={type} color={color} height={height} width={width} />
    </Container>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  isNavbar: PropTypes.bool,
};

Loading.defaultProps = {
  type: 'ThreeDots',
  color: 'black',
  height: 20,
  width: 80,
  isNavbar: false,
};

export default Loading;
