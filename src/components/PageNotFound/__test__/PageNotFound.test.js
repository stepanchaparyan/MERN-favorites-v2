import { renderSnapshot } from '../../../utils/tests';
import PageNotFound from '../PageNotFound.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

describe('PageNotFound component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(PageNotFound);
  });
});
