import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, configure } from '@storybook/react';
import theme from '../src/styles/theme';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());
addDecorator(s => <ThemeProvider theme={theme}>{s()}</ThemeProvider>);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
