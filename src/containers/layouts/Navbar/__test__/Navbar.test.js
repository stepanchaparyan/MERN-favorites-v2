import React, { useContext } from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Navbar from '../Navbar.js';
import { Flag, Hamburger, Logout } from '../NavbarStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: jest.fn(() => ({
      isAuthencated: true,
      user: { name: 'testName' },
      logout: jest.fn(),
      clearErrors: jest.fn()
    }))
  };
});

const mocked = jest.fn(() => {});

describe('Navbar component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(Navbar);
  });

  test('should click on Flag elements', () => {
    const component = shallow(<Navbar changeLocale={mocked} />);
    const flags = component.find(Flag);
    flags.forEach(flag => {
      flag.simulate('click');
      expect(mocked).toHaveBeenCalled();
    });
  });

  test('should click on Hamburger elements', () => {
    const component = shallow(<Navbar />);
    const hamburger = component.find(Hamburger);
    hamburger.simulate('click');
  });

  test('should click on Logout elements', () => {
    const component = shallow(<Navbar />);
    const logout = component.find(Logout);
    logout.simulate('click');
  });

  test('should click on Logout elements', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        isAuthencated: false,
        clearErrors: jest.fn()
      }))
    );

    const component = shallow(<Navbar changeLocale={mocked} />);
    const flags = component.find(Flag);
    flags.forEach(flag => {
      flag.simulate('click');
      expect(mocked).toHaveBeenCalled();
    });
  });
});
