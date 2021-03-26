import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Container } from '../HomeStyled';

describe('HomeStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
