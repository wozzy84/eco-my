import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDetails = ({ form }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <Form.Label>Adres zbiórki </Form.Label>
      <Form.Control
        value={form.values.tag}
        name="tag"
        type="text"
        placeholder="Dodaj Tag"
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
          selected={startHour}
          onChange={(hour) => setStartHour(hour)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Form.Group>

      <Form.Label>Osoba kontaktowa </Form.Label>
      <Form.Control
        value={form.values.tag}
        name="tag"
        type="text"
        placeholder="Imię i nazwisko"
        onChange={form.handleChange}
      />

      <Form.Label>Telefon </Form.Label>
      <Form.Control
        value={form.values.tag}
        name="tag"
        type="text"
        placeholder="Numer telefonu"
        onChange={form.handleChange}
      />
    </>
  );
};

export default FormDetails;
