import { renderSnapshot } from '../../../utils/tests';
import Message from '../Message.js';

const msg = 'testMessage';

describe('Message component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(Message, { msg });
  });
});
