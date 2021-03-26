import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, LinkStyled, LoadingMessage, Option, UpdateButton } from '../ProfileFormStyled';

describe('ProfileFormStyled component test with Enzyme', () => {
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

  test('renders correct style of Option component', () => {
    const tree = renderToJSON(Option, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of UpdateButton component', () => {
    const tree = renderToJSON(UpdateButton, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
