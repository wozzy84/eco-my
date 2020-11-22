import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";

const FormSubmitted = ({ values }) => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSuccess(true);
    }, 2500);
  }, []);
  return (
    <>
      {!success && (
        <>
          <p>trwa wysyłanie formularza...</p>
          <Spinner animation="border" variant="success" />
        </>
      )}

      {success && (
        <Alert variant="success">
          Gratulacje, udało Ci się wysłać zgłoszenie zbiórki do{" "}
          {(values.odbiorca === "Inny"
            ? values.innyOdbiorca
            : values.odbiorca) || "wybranego odbiorcy"}{" "}
          i Urzędu Miasta Chełm
        </Alert>
      )}
    </>
  );
};

export default FormSubmitted;
