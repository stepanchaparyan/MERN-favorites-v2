import { renderSnapshot } from '../../../../utils/tests';
import FilterAndSearch from '../FilterAndSearch.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i,
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      favItems: [
        {
          _id: '123',
          name: 'test',
          category: 'Other',
        },
      ],
    }),
  };
});

describe('FilterAndSearch component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(FilterAndSearch);
  });
});
