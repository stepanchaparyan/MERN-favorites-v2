import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Title, Count } from '../FavItemStatStyled';

describe('FavItemStatStyled component test with Enzyme', () => {
  test('renders correct style of Title component', () => {
    const tree = renderToJSON(Title, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of Count component with props', () => {
    const tree = renderToJSON(Count, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
