import React from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

const FormDodaj = ({ form }) => {
  console.log(form);
  return (
    <>
      <Form.Label>Co chesz zbierać? </Form.Label>
      <Form.Check
        value={form.values.nakretki}
        id="nakretki"
        name="nakretki"
        label="nakrętki"
        onChange={form.handleChange}
      />
      <Form.Check
        value={form.values?.baterie}
        id="baterie"
        name="baterie"
        label="baterie"
      />
      <Form.Check
        value={form.values?.ubrania}
        id="ubrania"
        name="ubrania"
        label="ubrania"
      />
      <Form.Check
        id="elektrosmieci"
        name="elektrosmieci"
        label="elektrośmieci"
      />
      <Form.Check id="ksiazki" name="ksiazki" label="ksiązki" />
      <Form.Check id="leki" name="leki" label="leki" />
      <Form.Check id="zlom" name="zlom" label="złom" />
      <Form.Check id="metal" name="metal" label="metal" />
    </>
  );
};

export default FormDodaj;
