import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, LinkStyled, LoadingMessage, Button } from '../ProfileStyled';

describe('ProfileStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of LinkStyled component', () => {
    const tree = renderToJSON(LinkStyled, { theme }, Router);
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of LoadingMessage component', () => {
    const tree = renderToJSON(LoadingMessage, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of Button component', () => {
    const tree = renderToJSON(Button, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
