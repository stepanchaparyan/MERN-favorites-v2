import { renderSnapshot } from '../../../../utils/tests';
import Home from '../Home.js';

describe('Home component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(Home);
  });
});
