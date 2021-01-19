import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Input } from '../FileUploadStyled';

describe('FileUploadStyled component test with Enzyme', () => {
  test('renders correct style of Input component', () => {
    const tree = renderToJSON(Input, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
