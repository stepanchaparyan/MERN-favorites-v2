// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactGA from 'react-ga';

const useGAEventTracker = (category = 'Category') => {
  return (action = 'action', label = 'label') => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };
};

export default useGAEventTracker;
