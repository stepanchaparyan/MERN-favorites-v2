import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Container, ButtonSubmit, Option } from '../FavItemFormStyled';

describe('FavItemFormStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of ButtonSubmit component', () => {
    const tree = renderToJSON(ButtonSubmit, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of Option component', () => {
    const tree = renderToJSON(Option, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
