import React from 'react';
import PropTypes from 'prop-types';
import { Container, ProgressBar } from './ProgressStyled';

const Progress = ({ percentage }) => {
  return (
    <Container>
      <ProgressBar width={percentage}>{percentage}%</ProgressBar>
    </Container>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;
