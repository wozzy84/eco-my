import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
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
    console.log(end);
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
      <Form.Label>Adres zbiórki </Form.Label>
      <Form.Control
        value={form.values.address}
        name="address"
        type="text"
        placeholder="Adres"
        onChange={form.handleChange}
      />
      <Form.Group>
        <Form.Label>Termin zbiórki</Form.Label>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </Form.Group>
      <Form.Check
        value={form.values.bezterminowa}
        name="bezterminowa"
        label="Zbiórka bezterminowa"
        checked={form.values.bezterminowa}
        onChange={form.handleChange}
      />
      <p>Godziny otwarcia:</p>
      <Form.Group>
        <Form.Label>od:</Form.Label>
        <DatePicker
          selected={startHour}
          onChange={(hour) => setStartHour(hour)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>do:</Form.Label>
        <DatePicker
          selected={endHour}
          onChange={(hour) => setEndHour(hour)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Form.Group>

      <Form.Label>Osoba kontaktowa </Form.Label>
      <Form.Control
        value={form.values.contactPerson}
        name="ContactPerson"
        type="text"
        placeholder="Imię i nazwisko"
        onChange={form.handleChange}
      />

      <Form.Label>Telefon </Form.Label>
      <Form.Control
        value={form.values.contactPhone}
        name="contactPhone"
        type="text"
        placeholder="Numer telefonu"
        onChange={form.handleChange}
      />
    </>
  );
};

export default FormDetails;
