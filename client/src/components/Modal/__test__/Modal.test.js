import { renderSnapshot } from '../../../utils/tests';
import Modal from '../Modal.js';

const props = {
  modalIsOpen: true,
  closeModal: jest.fn(),
  onConfirm: jest.fn(),
  title: 'title',
  text: 'text',
  buttonConfirmText: 'text',
  buttonCancelText: 'text',
  titleBgColor: 'blue',
  cancelButtonColor: 'red'
};

describe('Modal component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(Modal, { ...props });
  });
});
