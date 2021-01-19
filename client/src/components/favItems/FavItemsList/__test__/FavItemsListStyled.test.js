import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { CardContainer, Button } from '../FavItemsListStyled';

describe('FavItemsListStyled component test with Enzyme', () => {
  test('renders correct style of CardContainer component', () => {
    const tree = renderToJSON(CardContainer, { theme });
    expect(tree).toHaveStyleRule('opacity', '1');
  });

  test('renders correct style of CardContainer component with props', () => {
    const testOpacity = true;
    const tree = renderToJSON(CardContainer, { theme, myOpacity: testOpacity });
    expect(tree).toHaveStyleRule('opacity', '0.2');
  });

  test('renders correct style of Button component', () => {
    const tree = renderToJSON(Button, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
