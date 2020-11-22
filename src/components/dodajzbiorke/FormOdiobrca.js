import React from "react";
import { Form } from "react-bootstrap";

const FormOdbiorca = ({ form }) => {
  return (
    <>
      <Form.Label className="form__cat-title">Wskaź odbiorcę </Form.Label>
      <Form.Control
        name="odbiorca"
        className="form_text-input"
        value={form.values.odbiorca}
        onChange={(e) => form.setFieldValue("odbiorca", e.target.value)}
        as="select"
      >
        <option value=""></option>
        <option value="PPHU ZIELONE MIASTO SP ZOO">
          PPHU "ZIELONE MIASTO SP ZOO"
        </option>
        <option value="Z-BYŚ Sp. zo.o.">Z-BYŚ Sp. zo.o.</option>
        <option value="Ramones Bis S.A.">Ramones Bis S.A. </option>
        <option value="Czyste Parki i Ogrody sp.c.">
          Czyste Parki i Ogrody sp.c.
        </option>
      </Form.Control>
    </>
  );
};

export default FormOdbiorca;
