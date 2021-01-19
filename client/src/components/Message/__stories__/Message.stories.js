import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from '../Message';
import faker from 'faker';

const msg = faker.lorem.words();

storiesOf('Message', module).add('default', () => <Message msg={msg} />);
