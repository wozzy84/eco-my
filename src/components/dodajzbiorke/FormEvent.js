import React from "react";
import { Form } from "react-bootstrap";

const FormEvent = ({ form, values }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Nazwa zbórki</Form.Label>
        <Form.Control
          value={form.values.name}
          name="name"
          type="text"
          placeholder="Podaj nazwę zbiórki"
          onChange={form.handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Opis Wydarzenia</Form.Label>
        <Form.Control
          name="opis"
          value={form.values.opis}
          onChange={form.handleChange}
          as="textarea"
          rows={3}
        />
      </Form.Group>
    </>
  );
};

export default FormEvent;
