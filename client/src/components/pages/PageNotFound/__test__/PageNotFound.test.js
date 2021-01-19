import { renderSnapshot } from '../../../../utils/tests';
import NotFound from '../PageNotFound.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

describe('NotFound component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(NotFound);
  });
});
