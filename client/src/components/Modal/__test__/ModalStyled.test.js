import { renderToJSON } from '../../../utils/tests';
import theme from '../../../styles/theme';
import {
  ButtonConfirm,
  ButtonClose,
  ButtonCancel,
  ModalTitleContainer,
  ModalTextContainer
} from '../ModalStyled';

describe('ModalStyled component test with Enzyme', () => {
  const bgColor = 'red';
  const color = 'blue';
  test('renders correct style of ButtonConfirm component', () => {
    const tree = renderToJSON(ButtonConfirm, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of ButtonClose component', () => {
    const tree = renderToJSON(ButtonClose, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of ButtonClose component with props', () => {
    const tree = renderToJSON(ButtonClose, { theme, bgColor });
    expect(tree).toHaveStyleRule('background-color', bgColor);
  });

  test('renders correct style of ButtonCancel component', () => {
    const tree = renderToJSON(ButtonCancel, { theme });
    expect(tree).toHaveStyleRule('background-color', 'lightgrey');
  });

  test('renders correct style of ButtonCancel component with props', () => {
    const tree = renderToJSON(ButtonCancel, { theme, color });
    expect(tree).toHaveStyleRule('background-color', color);
  });

  test('renders correct style of ModalTitleContainer component', () => {
    const tree = renderToJSON(ModalTitleContainer, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });

  test('renders correct style of ModalTitleContainer component with props', () => {
    const tree = renderToJSON(ModalTitleContainer, { theme, bgColor });
    expect(tree).toHaveStyleRule('background-color', bgColor);
  });

  test('renders correct style of ModalTextContainer component with props', () => {
    const tree = renderToJSON(ModalTextContainer, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
