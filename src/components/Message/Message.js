import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './MessageStyled';

const Message = ({ msg }) => {
  return <Container>{msg}</Container>;
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
