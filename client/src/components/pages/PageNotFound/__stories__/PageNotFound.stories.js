import React from 'react';
import { storiesOf } from '@storybook/react';
import PageNotFound from '../PageNotFound';
import AuthState from '../../../../context/authContext/AuthState';

storiesOf('PageNotFound', module).add('default', () => (
  <AuthState>
    <PageNotFound />
  </AuthState>
));
