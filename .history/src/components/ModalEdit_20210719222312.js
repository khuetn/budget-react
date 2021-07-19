import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ModalEdit({ isOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>Something here</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button></Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
