import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import FormDodaj from "./FormDodaj";
import FormCel from "./FormCel";
import { Formik } from "formik";
import FormTagi from "./FormTagi";
import FormOdbiorca from "./FormOdiobrca";
import FormEvent from "./FormEvent";
import FormDetails from "./FormDetails";
import FormSummary from "./FormSummary";
import FormSubmitted from "./FormSubmitted";
import Header from "../homepage/header/Header";
import Footer from "../homepage/footer/Footer";

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
    bezterminowa: false,
    ContactPerson: "",
    contactPhone: "",
    endDate: "",
    startDate: "",
    endHour: "",
    startHour: "",
    opis: "",
    odbiorca: "",
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
      case 6:
        return <FormDetails form={form} values={form.values} />;
      case 7:
        return <FormSummary form={form} values={form.values} />;
      case 8:
        return <FormSubmitted values={form.values} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container className="form__container">
        <h2 className="form__cat-title">Dodaj Zbiórkę</h2>
        <p className="form__cat-title">Krok {formStep} z 8</p>
        <Formik
          initialValues={initialValues}
          validateOnBlur={true}
          enableReinitialize
          onSubmit={() => null}
        >
          {(form) => getCurrentForm(formStep, form)}
        </Formik>
        {formStep <= 7 && (
          <>
            <Button className="form__button" onClick={handlePrev}>
              Cofnij
            </Button>
            <Button className="form__button" onClick={handleNext}>
              Dalej
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default DodajZbiorke;
