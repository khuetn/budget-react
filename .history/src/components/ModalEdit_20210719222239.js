import React from "react";
import { Modal } from "semantic-ui-react";

function ModalEdit({ isOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>Something here</Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default ModalEdit;
