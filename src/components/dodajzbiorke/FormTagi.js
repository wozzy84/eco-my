import React from "react";
import { Col, Row, Form, Button, Badge } from "react-bootstrap";

const FormTagi = ({ form }) => {
  console.log(form.values);
  const handleClick = () => {
    form.setFieldValue("tagArr", [...form.values.tagArr, form.values.tag]);
    form.values.tag = "";
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Label className="form__cat-title">Otaguj zbiórkę </Form.Label>

          <div className="tag-container">
            <Form.Control
              className="form_text-input"
              value={form.values.tag}
              name="tag"
              type="text"
              placeholder="Dodaj Tag"
              onChange={form.handleChange}
            />
            <Button onClick={handleClick} variant="success">
              Dodaj
            </Button>
          </div>

          <div className="pill-contnainer">
            {form.values.tagArr.map((el) => (
              <Badge pill variant="success" className="pill">
                {el}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FormTagi;
