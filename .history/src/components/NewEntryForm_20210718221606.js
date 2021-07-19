import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveorCancel from "./ButtonSaveorCancel";
function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <ButtonSaveorCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
