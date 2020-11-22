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
        <Col>
          <p className="form__cat-title">Nazwa Zbiórki</p>
          {values.name || "-"}
          <p className="form__cat-title"> Zbierane rzeczy</p>
          {filtered.map((el) => el + ", ")}
          <p className="form__cat-title">Cel Zbiórki</p>
          {values.cel.cel || "-"}
          <p className="form__cat-title">Opis</p>
          {values.opis || "-"}
          <p className="form__cat-title">Miejsce Zbiórki</p>
          {values.address || "-"}
          <p className="form__cat-title">Termin Rozpoczęcia</p>
          {values.startDate.toLocaleDateString() || "-"}
          <p className="form__cat-title">Termin zakończenia</p>
          {values?.endDate?.toLocaleDateString() || "-"}
          <p className="form__cat-title">Bezterminowo</p>
          {values.bezterminowo ? "TAK" : "NIE"}
          <p className="form__cat-title">Godziny otwarcia</p> od{" "}
          {values?.startHour?.toLocaleTimeString()} do{" "}
          {values?.endHour?.toLocaleTimeString()}
          <p className="form__cat-title">Odbiorca</p>
          {values.odbiorca === "Inny" ? values.innyOdbiorca : values.odbiorca}
          <p className="form__cat-title">Osoba kontakowa</p>{" "}
          {values.contactPerson || "-"}{" "}
          <p className="form__cat-title">Telefon kontaktowy</p>
          {values.contactPhone || "-"}
          <p className="form__cat-title">Tagi</p>
          {values?.tagArr?.map((el) => el + ", ") || "-"}
        </Col>
      </Row>
    </>
  );
};

export default FormSummary;
