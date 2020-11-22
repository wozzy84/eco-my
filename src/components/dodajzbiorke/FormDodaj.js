import React from "react";
import { Form } from "react-bootstrap";
const FormDodaj = ({ form }) => {
  console.log(form.values);
  return (
    <>
      <Form.Label className="form__cat-title">Co chesz zbierać? </Form.Label>
      <Form.Check
        value={form.values.coZbieram.nakretki}
        id="nakretki"
        name="coZbieram.nakretki"
        label="nakrętki"
        checked={form.values.coZbieram.nakretki}
        onChange={form.handleChange}
      />
      <Form.Check
        value={form.values?.coZbieram.baterie}
        id="baterie"
        name="coZbieram.baterie"
        label="baterie"
        checked={form.values.coZbieram.baterie}
        onChange={form.handleChange}
      />
      <Form.Check
        value={form.values?.coZbieram.ubrania}
        id="ubrania"
        name="coZbieram.ubrania"
        label="ubrania"
        checked={form.values.coZbieram.ubrania}
        onChange={form.handleChange}
      />
      <Form.Check
        id="elektrosmieci"
        name="coZbieram.elektrosmieci"
        label="elektrośmieci"
        checked={form.values.coZbieram.elektrosmieci}
        onChange={form.handleChange}
      />
      <Form.Check
        id="ksiazki"
        name="coZbieram.ksiazki"
        label="ksiązki"
        checked={form.values.coZbieram.ksiazki}
        onChange={form.handleChange}
      />
      <Form.Check
        id="zlom"
        name="coZbieram.zlom"
        label="złom"
        checked={form.values.coZbieram.zlom}
        onChange={form.handleChange}
      />
      <Form.Check
        id="metal"
        name="coZbieram.metal"
        label="metal"
        checked={form.values.coZbieram.metal}
        onChange={form.handleChange}
      />
    </>
  );
};

export default FormDodaj;
