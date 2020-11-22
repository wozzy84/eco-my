import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormSummary = ({ form, values }) => {
  console.log(values);

  const keys = Object.keys(form.values.coZbieram);

  const filtered = keys.filter(function (key) {
    return form.values.coZbieram[key];
  });
  return (
    <>
      <h3>Podsumowanie:</h3>
      <Row>
        <Col>Nazwa Zbiórki</Col>
        <Col>{values.name}</Col>
      </Row>
      <Row>
        <Col>Zbierane rzeczy</Col>
        <Col>{filtered.map((el) => el + ", ")}</Col>
      </Row>
      <Row>
        <Col>Cel Zbiórki</Col>
        <Col>{values.cel.cel || "-"}</Col>
      </Row>
      <Row>
        <Col>Opis</Col>
        <Col>{values.opis}</Col>
      </Row>
      <Row>
        <Col>Miejsce Zbiórki</Col>
        <Col>{values.address}</Col>
      </Row>
      <Row>
        <Col>Termin Rozpoczęcia</Col>
        <Col>{values.startDate.toLocaleDateString()}</Col>
      </Row>
      <Row>
        <Col>Termin zakończenia</Col>
        <Col>{values?.endDate?.toLocaleDateString()}</Col>
      </Row>
      <Row>
        <Col>Bezterminowo</Col>
        <Col>{values.bezterminowo ? "TAK" : "NIE"}</Col>
      </Row>
      <Row>
        <Col>Godziny otwarcia</Col>
        <Col>
          od {values?.startHour?.toLocaleTimeString()} do{" "}
          {values?.endHour?.toLocaleTimeString()}{" "}
        </Col>
      </Row>
      <Row>
        <Col>Odbiorca</Col>
        <Col>{values.odbiorca}</Col>
      </Row>
      <Row>
        <Col>Osoba kontakowa</Col>
        <Col>{values.contactPerson}</Col>
      </Row>
      <Row>
        <Col>Telefon kontaktowy</Col>
        <Col>{values.contactPhone}</Col>
      </Row>
      <Row>
        <Col>Tagi</Col>
        <Col>{values?.tagArr?.map((el) => el + ", ")} </Col>
      </Row>
    </>
  );
};

export default FormSummary;
