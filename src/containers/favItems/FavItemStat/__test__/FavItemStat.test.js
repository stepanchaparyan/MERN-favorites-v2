import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import FavItemStat from '../FavItemStat.js';
import { Title } from '../FavItemStatStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i,
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      favItems: [
        {
          _id: '123',
          name: 'test',
          category: 'Other',
        },
      ],
    }),
  };
});

describe('FavItemStat component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    const component = shallow(<FavItemStat />);
    const title = component.find(Title);
    title.simulate('click');
    expect(component).toMatchSnapshot();
  });
});
