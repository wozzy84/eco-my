import React from "react";
import { Form } from "react-bootstrap";

const FormEvent = ({ form, values }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="form__cat-title">Nazwa zbórki</Form.Label>
        <Form.Control
          className="form_text-input"
          value={form.values.name}
          name="name"
          type="text"
          placeholder="Podaj nazwę zbiórki"
          onChange={form.handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form__cat-title">Opis Wydarzenia</Form.Label>
        <Form.Control
          className="form_text-input"
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
