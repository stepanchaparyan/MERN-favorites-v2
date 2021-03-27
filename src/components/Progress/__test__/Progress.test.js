import { renderSnapshot } from '../../../utils/tests';
import Progress from '../Progress.js';

describe('Progress component test with Enzyme', () => {
  test('renders snapshot', () => {
    const percentage = 50;
    renderSnapshot(Progress, { percentage });
  });
});
