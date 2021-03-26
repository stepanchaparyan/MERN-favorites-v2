import React from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import FavItemCard from '../FavItemCard.js';
import { Button } from '../FavItemCardStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      edit_FavItem: () => {},
      toggle_Form: () => {},
      removeFavItem: () => {},
      clearEdit: () => {}
    })
  };
});

const props = {
  _id: '12345',
  author: 'testAuthor',
  title: 'testTitle',
  category: 'testCategory',
  description: 'testDescription'
};

describe('FavItemCard component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(FavItemCard, { favItem: props });
  });

  test('render handleEdit component', () => {
    const component = shallow(<FavItemCard favItem={props} />);
    const button = component.find(Button).at(0);

    button.simulate('click');
    expect(component).toMatchSnapshot();
  });

  test('render handleRemove click', () => {
    const component = shallow(<FavItemCard favItem={props} />);
    const button = component.find(Button).at(1);

    button.simulate('click');
    expect(component).toMatchSnapshot();
  });
});
