import React, { useContext } from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { renderSnapshot } from '../../../../utils/tests';
import FavItemForm from '../FavItemForm.js';
import { FieldStyled, ErrorButton } from '../FavItemFormStyled';
import { FAVITEM } from '../../../../constants';

const { DEFAULT_VALUES } = FAVITEM;

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: jest.fn().mockImplementation(() => ({
      onSubmit: jest.fn(),
      update_FavItem: jest.fn(),
      error: 'a',
      clearErrors: jest.fn()
    }))
  };
});

describe('FavItemForm component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(FavItemForm);
  });

  test('render submit on Form component', () => {
    const component = shallow(<FavItemForm />);
    const form = component.find('Formik');
    form.simulate('submit', { target: { name: '123' } });
  });

  test('should pass the correct initial values', () => {
    const component = shallow(<FavItemForm />);
    const initialValues = component.find('Formik').props().initialValues;

    expect(initialValues.author).toBe(DEFAULT_VALUES.AUTHOR);
    expect(initialValues.title).toBe(DEFAULT_VALUES.TITLE);
    expect(initialValues.category).toBe(DEFAULT_VALUES.CATEGORY);
    expect(initialValues.description).toBe(DEFAULT_VALUES.DESCRIPTION);
  });

  test('should pass the correct initial values when editFavitem is true', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        editFavItem: { author: 'Joe' }
      }))
    );

    const component = shallow(<FavItemForm />);
    const initialValues = component.find('Formik').props().initialValues;

    expect(initialValues.author).toBe('Joe');
  });

  test('render change on Input component', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        editFavItem: {},
        clearEdit: jest.fn(),
        toggle_Form: jest.fn(),
        update_FavItem: jest.fn(),
        clearErrors: jest.fn()
      }))
    );

    const component = shallow(<FavItemForm />);

    const inputs = component.find(FieldStyled);
    inputs.forEach(input => {
      input.simulate('change', { target: { value: 'target' } });
    });

    expect(component).toMatchSnapshot();
  });

  test('render click on ErrorButton when error is not array', () => {
    const component = shallow(<FavItemForm />);

    const errorButtons = component.find(ErrorButton);
    errorButtons.forEach(errorButton => {
      errorButton.simulate('click');
    });
    expect(component).toMatchSnapshot();
  });

  test('render click on ErrorButton when error is array', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        editFavItem: {},
        clearEdit: jest.fn(),
        toggle_Form: jest.fn(),
        update_FavItem: jest.fn(),
        clearErrors: jest.fn(),
        error: ['a', 'b']
      }))
    );

    const component = shallow(<FavItemForm />);

    const errorButtons = component.find(ErrorButton);
    errorButtons.forEach(errorButton => {
      errorButton.simulate('click');
    });
    expect(component).toMatchSnapshot();
  });
});
