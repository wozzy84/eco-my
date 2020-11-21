import React from "react";
import { Form } from "react-bootstrap";

const FormEvent = ({ form }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Nazwa zbórki</Form.Label>
        <Form.Control
          value={form.values.tag}
          name="tag"
          type="text"
          placeholder="Dodaj Tag"
          onChange={form.handleChange}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Opis Wydarzenia</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </>
  );
};

export default FormEvent;
