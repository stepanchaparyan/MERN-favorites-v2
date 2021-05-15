import { BrowserRouter as Router } from 'react-router-dom';
import { renderToJSON } from '../../../utils/tests';
import theme from '../../../styles/theme';
import { LinkStyled } from '../PageNotFoundStyled';

describe('PageNotFoundStyled component test with Enzyme', () => {
  test('renders correct style of LinkStyled component', () => {
    const tree = renderToJSON(LinkStyled, { theme }, Router);
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
