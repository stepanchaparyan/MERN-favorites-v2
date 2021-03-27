import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '../Progress';
import faker from 'faker';

const percentage = faker.random.number(100);

storiesOf('Progress', module).add('default', () => <Progress percentage={percentage} />);
