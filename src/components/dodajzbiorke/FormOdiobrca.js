import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const FormOdbiorca = ({ form }) => {
  const [other, setOther] = useState(false);

  useEffect(() => {
    if (form.values.odbiorca === "Inny") {
      setOther(true);
    } else {
      setOther(false);
    }
  }, [form]);

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
        <option value="Inny">Inny</option>
      </Form.Control>

      {other && (
        <>
          <Form.Label className="form__cat-title">
            Podaj nazwę odbiorcy{" "}
          </Form.Label>
          <Form.Control
            className="form_text-input"
            value={form.values.innyOdbiorca}
            name="innyOdbiorca"
            type="text"
            placeholder="Odbiorca"
            onChange={form.handleChange}
          />
        </>
      )}
    </>
  );
};

export default FormOdbiorca;
