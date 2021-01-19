import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Container, InfoData, Button, Label } from '../FavItemCardStyled';

describe('FavItemCard component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('border', `1px solid ${theme.cadetblue}`);
  });

  test('renders correct style of InfoData component', () => {
    const tree = renderToJSON(InfoData, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of Button component', () => {
    const tree = renderToJSON(Button, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of Label component', () => {
    const tree = renderToJSON(Label, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of Label component with props', () => {
    const color = 'red';
    const tree = renderToJSON(Label, { theme, color: color });
    expect(tree).toHaveStyleRule('background-color', color);
  });
});
