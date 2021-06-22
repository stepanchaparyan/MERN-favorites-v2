import React from 'react';
import { Modal } from 'react-bootstrap';

function Join(props) {
  const { closeModal, userName, handleNameChange, isSubmitDone, joinChat } = props;

  return (
    <Modal show onHide={closeModal}>
      <Modal.Body>
        <div>
          <input type="text" placeholder="Your name" value={userName} onChange={handleNameChange} />
          {isSubmitDone && userName.length === 0 && <p>Name is required</p>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button onClick={joinChat}>Join</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Join;
