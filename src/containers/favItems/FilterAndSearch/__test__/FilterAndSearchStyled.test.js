import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { SelectContainer, Input } from '../FilterAndSearchStyled';

describe('FilterAndSearchStyled component test with Enzyme', () => {
  test('renders correct style of SelectContainer component', () => {
    const tree = renderToJSON(SelectContainer, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue, {
      modifier: '& div',
    });
  });

  test('renders correct style of Input component with props', () => {
    const tree = renderToJSON(Input, { theme });
    expect(tree).toHaveStyleRule('border', `1px solid ${theme.cadetblue}`);
  });
});
