import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Container, FieldStyled, FormStyled, LoginButton } from '../LoginStyled';

describe('LoginStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  xtest('renders correct style of FieldStyled component', () => {
    const tree = renderer
      .create(
        <Formik>
          {() => (
            <FormStyled>
              <FieldStyled />
            </FormStyled>
          )}
        </Formik>
      )
      .toJSON();
    expect(tree.children[0]).toHaveStyleRule('border-bottom', `1px solid ${theme.cadetblue}`);
  });

  test('renders correct style of LoginButton component', () => {
    const tree = renderToJSON(LoginButton, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
    expect(tree).toHaveStyleRule('border-bottom', `1px solid ${theme.cadetblue}`);
  });
});
