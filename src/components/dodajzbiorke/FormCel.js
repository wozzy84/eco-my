import React, { useState, useEffect } from "react";

import { Form } from "react-bootstrap";

const FormCel = ({ form }) => {
  const [isMonthly, setIsMonthly] = useState(false);
  useEffect(() => {
    if (form.values.cel.cel === "Cel miesiaca") {
      setIsMonthly(true);
    } else {
      setIsMonthly(false);
    }
  }, [form]);
  return (
    <>
      <>
        <Form.Label>Określ Cel zbórki </Form.Label>
        <Form.Control
          name="cel.cel"
          value={form.values.cel.cel}
          onChange={(e) => form.setFieldValue("cel.cel", e.target.value)}
          as="select"
        >
          <option value="Charytatywny">Charytatywny</option>
          <option value="Społeczny">Społeczny</option>
          <option value="Skup">Skup</option>
          <option value="Cel miesiaca">Cel Miesiąca</option>
        </Form.Control>
      </>
      {isMonthly && (
        <>
          <Form.Check
            type="radio"
            value={form.values.cel.miesiaca}
            id="Pomoc dla Zuzi"
            name="cel.miesiaca"
            label="Pomoc dla Zuzi"
            onChange={(e) => form.setFieldValue("cel.miesiaca", e.target.id)}
          />
          <Form.Check
            type="radio"
            value={form.values?.miesiaca}
            id="Nowa zieleń w parku im. B. Prusa"
            name="cel.miesiaca"
            label="Nowa zieleń w parku im. B. Prusa"
            onChange={(e) => form.setFieldValue("cel.miesiaca", e.target.id)}
          />
          <Form.Check
            type="radio"
            value={form.values?.cel.miesiaca}
            name="cel.miesiaca"
            id="Książki dla osiedlowej biblioteki Kubusia Puchatka"
            label="Książki dla osiedlowej biblioteki Kubusia Puchatka"
            onChange={(e) => form.setFieldValue("cel.miesiaca", e.target.id)}
          />
        </>
      )}
    </>
  );
};

export default FormCel;
