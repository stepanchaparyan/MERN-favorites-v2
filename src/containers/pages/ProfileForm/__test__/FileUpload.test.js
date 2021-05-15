import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import 'jest-styled-components';
import { renderSnapshot } from '../../../../utils/tests';
import FileUpload from '../FileUpload.js';
import { InputHidden, Input } from '../FileUploadStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.spyOn(Modal, 'setAppElement').mockImplementation(() => {});

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useEffect: jest.fn().mockImplementation(f => f),
    useContext: jest.fn(() => ({
      editProfile: {
        name: 'testName',
        surname: 'testSurname',
        email: 'test@email.com',
        gender: 'testGender',
        birthDay: 'testBirtday',
        phoneNumber: '123456789',
        image: 'image.png'
      },
      toggle_Form: jest.fn(),
      updateProfile: jest.fn(),
      update_File: jest.fn()
    }))
  };
});

describe('FileUpload component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(FileUpload);
  });

  xtest('should click on CustomModal elements', () => {
    const component = shallow(<FileUpload />);
    const input = component.find(Input);
    input.simulate('click', { target: { files: [{ image: 'image/jpg' }] } });
  });

  test('should click on Form element', () => {
    const component = shallow(<FileUpload />);
    const form = component.find('form');
    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  test('should click on InputHidden element', () => {
    const component = shallow(<FileUpload />);
    const inputHidden = component.find(InputHidden);
    inputHidden.simulate('change', { target: { files: [{ type: 'image/jpg' }] } });
  });

  test('should click on InputHidden element with target files type', () => {
    const component = shallow(<FileUpload />);
    const inputHidden = component.find(InputHidden);
    inputHidden.simulate('change', { target: { files: ['image/png'] } });
  });
});
