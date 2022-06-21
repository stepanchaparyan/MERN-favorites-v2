import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../Modal';
import faker from 'faker';

const NOOP = () => {};

const props = {
  modalIsOpen: true,
  closeModal: NOOP,
  onConfirm: NOOP,
  title: faker.lorem.words(),
  text: faker.lorem.sentence(),
  buttonConfirmText: faker.lorem.word(),
  buttonCancelText: faker.lorem.word(),
};

storiesOf('Modal', module).add('default', () => <Modal {...props} />);
