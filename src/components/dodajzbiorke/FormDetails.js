import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDetails = ({ form }) => {
  const [startDate, setStartDate] = useState(
    form.values.startDate || new Date()
  );
  const [startHour, setStartHour] = useState(new Date());
  const [endHour, setEndHour] = useState(new Date());
  const [endDate, setEndDate] = useState(form.values.endDate || null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    form.setFieldValue("startDate", startDate);
    form.setFieldValue("endDate", endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    form.setFieldValue("startHour", startHour);
    form.setFieldValue("endHour", endHour);
  }, [startDate, endDate]);

  return (
    <>
      <Row>
        <Col>
          <Form.Label className="form__cat-title">Adres zbiórki </Form.Label>
          <Form.Control
            className="form_text-input"
            value={form.values.address}
            name="address"
            type="text"
            placeholder="Adres"
            onChange={form.handleChange}
          />
          <p className="form__cat-title open-hours">Godziny otwarcia:</p>

          <Form.Label className="form__cat-title">od:</Form.Label>
          <DatePicker
            className="hour-picker"
            selected={startHour}
            onChange={(hour) => setStartHour(hour)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />

          <Form.Label className="form__cat-title">do:</Form.Label>
          <DatePicker
            className="hour-picker"
            selected={endHour}
            onChange={(hour) => setEndHour(hour)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
          <br></br>
          <Form.Label className="form__cat-title">Osoba kontaktowa </Form.Label>
          <Form.Control
            className="form_text-input"
            value={form.values.contactPerson}
            name="ContactPerson"
            type="text"
            placeholder="Imię i nazwisko"
            onChange={form.handleChange}
          />

          <Form.Label className="form__cat-title">Telefon </Form.Label>
          <Form.Control
            className="form_text-input"
            value={form.values.contactPhone}
            name="contactPhone"
            type="text"
            placeholder="Numer telefonu"
            onChange={form.handleChange}
          />
        </Col>
        <Col>
          <Form.Label className="form__cat-title">Termin zbiórki</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
          <Form.Check
            className="form__cat-title"
            value={form.values.bezterminowa}
            name="bezterminowa"
            label="Zbiórka bezterminowa"
            checked={form.values.bezterminowa}
            onChange={form.handleChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default FormDetails;
