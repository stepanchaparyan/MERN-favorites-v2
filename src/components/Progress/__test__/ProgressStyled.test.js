import { renderToJSON } from '../../../utils/tests';
import theme from '../../../styles/theme';
import { ProgressBar } from '../ProgressStyled';

describe('ProgressStyled component test with Enzyme', () => {
  test('renders correct style of ProgressBar component', () => {
    const tree = renderToJSON(ProgressBar, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
