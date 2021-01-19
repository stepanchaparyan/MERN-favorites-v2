import React from 'react';
import { storiesOf } from '@storybook/react';
import FavItemCard from '../FavItemCard';
import FavItemState from '../../../../context/favItemContext/favItemState';
import faker from 'faker';

const favItem = {
  _id: faker.random.uuid(),
  author: faker.name.findName(),
  title: faker.name.title(),
  category: 'Film',
  description: faker.lorem.slug()
};

storiesOf('FavItemCard', module).add('default', () => (
  <FavItemState>
    <FavItemCard favItem={favItem} />
  </FavItemState>
));
