import React from "react";
import { Container, Form, Button, Badge } from "react-bootstrap";

const FormTagi = ({ form }) => {
  console.log(form.values);
  const handleClick = () => {
    form.setFieldValue("tagArr", [...form.values.tagArr, form.values.tag]);
    form.values.tag = "";
  };

  return (
    <Container>
      <Form.Label>Otaguj zbiórkę </Form.Label>
      <Form.Control
        value={form.values.tag}
        name="tag"
        type="text"
        placeholder="Dodaj Tag"
        onChange={form.handleChange}
      />
      <Button onClick={handleClick} variant="success">
        Dodaj
      </Button>

      {form.values.tagArr.map((el) => (
        <Badge pill variant="success">
          {el}
        </Badge>
      ))}
    </Container>
  );
};

export default FormTagi;
