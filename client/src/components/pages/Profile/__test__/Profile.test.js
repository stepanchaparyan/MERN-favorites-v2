import React, { useContext } from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Profile from '../Profile.js';
import { Button, LoadingMessage } from '../ProfileStyled';
import Message from '../../../Message/Message';
import FileUpload from '../../ProfileForm/FileUpload';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useEffect: jest.fn().mockImplementation(f => f()),
    useContext: jest.fn(() => ({
      profile: [{ name: 'testName', image: 'test.png' }],
      getProfile: jest.fn(),
      edit_Profile: jest.fn(),
      toggle_Form: jest.fn()
    }))
  };
});

describe('Profile component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(Profile);
  });

  test('should click on Button elements', () => {
    const component = shallow(<Profile />);
    const button = component.find(Button);
    button.simulate('click');
    expect();
  });

  test('should render loadingMessage', () => {
    useContext.mockImplementation(
      jest.fn(() => ({
        profile: null,
        loading: true,
        getProfile: jest.fn()
      }))
    );
    const component = shallow(<Profile />);
    expect(component.exists(LoadingMessage)).toBe(true);
  });

  test('should render a new profile', () => {
    useContext.mockImplementation(
      jest.fn(() => ({
        profile: null,
        loading: false,
        getProfile: jest.fn(),
        addProfile: jest.fn(),
        user: {
          name: 'name',
          email: 'email'
        }
      }))
    );
    const component = shallow(<Profile />);
    expect(component.exists(LoadingMessage)).toBe(false);
  });

  test('should render Message component', () => {
    useContext.mockImplementation(
      jest.fn(() => ({
        profile: [{ name: 'testName', image: 'test.png' }],
        getProfile: jest.fn(),
        message: 'message'
      }))
    );
    const component = shallow(<Profile />);
    expect(component.exists(Message)).toBe(true);
  });

  test('should render Forms', () => {
    useContext.mockImplementation(
      jest.fn(() => ({
        profile: [{ name: 'testName', image: 'test.png' }],
        getProfile: jest.fn(),
        toggleForm: true
      }))
    );
    const component = shallow(<Profile />);
    expect(component.exists(FileUpload)).toBe(true);
  });
});
