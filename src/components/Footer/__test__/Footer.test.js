import { renderSnapshot } from '../../../utils/tests';
import Footer from '../Footer.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i,
}));

describe('Footer component test with Enzyme', () => {
  test('renders without crashing', () => {
    renderSnapshot(Footer);
  });
});
