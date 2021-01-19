import { renderToJSON } from '../../../../utils/tests';
import { Container, LinkStyled } from '../WelcomeStyled';
import theme from '../../../../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Welcome component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of LinkStyled component', () => {
    const tree = renderToJSON(LinkStyled, { theme }, Router);
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
