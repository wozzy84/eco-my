import React, { useState } from "react";
import { Button, Container, Row, Form } from "react-bootstrap";
import FormDodaj from "./FormDodaj";
import FormCel from "./FormCel";
import { Formik } from "formik";
import FormTagi from "./FormTagi";
import FormOdbiorca from "./FormOdiobrca";
import FormEvent from "./FormEvent";

const DodajZbiorke = () => {
  const [formStep, setFormStep] = useState(1);

  const handleNext = () => {
    setFormStep(formStep + 1);
  };

  const handlePrev = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const initialValues = {
    coZbieram: {
      nakretki: false,
      baterie: false,
      ubrania: false,
      elektrosmieci: false,
      ksiazki: false,
      zlom: false,
      metal: false,
    },
    cel: {
      cel: "",
    },
    tag: "",
    tagArr: [],
  };

  const getCurrentForm = (step, form) => {
    switch (step) {
      case 1:
        return <FormDodaj form={form} values={form.values} />;
      case 2:
        return <FormCel form={form} values={form.values} />;
      case 3:
        return <FormTagi form={form} values={form.values} />;
      case 4:
        return <FormOdbiorca form={form} values={form.values} />;
      case 5:
        return <FormEvent form={form} values={form.values} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <h2>Dodaj Zbiórkę</h2>
      <p>Krok {formStep} z 4</p>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        enableReinitialize
        onSubmit={() => null}
      >
        {(form) => getCurrentForm(formStep, form)}
      </Formik>
      <Button onClick={handlePrev}>Cofnij</Button>
      <Button onClick={handleNext}>Dalej</Button>
    </Container>
  );
};

export default DodajZbiorke;
