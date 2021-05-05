import { renderToJSON } from '../../../utils/tests';
import theme from '../../../styles/theme';
import { Container, NavLinks } from '../NavbarStyled';

describe('NavbarStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of NavLinks component with props', () => {
    const tree = renderToJSON(NavLinks, { open: true });
    expect(tree).toHaveStyleRule('display', 'flex');
  });

  test('renders correct style of NavLinks component without props', () => {
    const tree = renderToJSON(NavLinks);
    expect(tree).toHaveStyleRule('display', 'none');
  });
});
