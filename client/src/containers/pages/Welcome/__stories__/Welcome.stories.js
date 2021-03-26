import React from 'react';
import { storiesOf } from '@storybook/react';
import Welcome from '../Welcome';
import AuthState from '../../../../context/authContext/AuthState';

storiesOf('Welcome', module).add('default', () => (
  <AuthState>
    <Welcome />
  </AuthState>
));
