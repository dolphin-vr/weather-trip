import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { maxDate, todayDate } from "../../shared/utils/dates";
import { Selector } from "../Selector/Selector";
import { DatePicker } from "../DatePicker/DatePicker";
import { Backdrop, BtnCancel, BtnClose, BtnSave, ErrorMsg, Fields, Footer, Form, Label, Star, SvgIcon, Title } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onSave, onClose }) => {
  const [city, setCity] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const today = todayDate();
  const lastDate = maxDate(todayDate(), 15);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (city && startDate && endDate) {
      setShowErrorMsg(false);
      onSave({ city, startDate, endDate });
      onClose();
    } else {
      setShowErrorMsg(true);
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <BtnClose type="button" onClick={onClose}>
          <SvgIcon tag={"close"} />
        </BtnClose>
        <Title>Create trip</Title>
        <Fields>
          <Label>
            <Star>* </Star>City
          </Label>
          <Selector handleSelector={setCity} />
          <Label>
            <Star>* </Star>Start date:
          </Label>
          <DatePicker name={"start"} minDate={today} maxDate={endDate || lastDate} handleChange={setStartDate} />
          <Label>
            <Star>* </Star>End date:
          </Label>
          <DatePicker name={"end"} minDate={startDate || today} maxDate={lastDate} handleChange={setEndDate} />
        </Fields>
        {showErrorMsg && <ErrorMsg>* All fields are required</ErrorMsg>}
        <Footer>
          <BtnCancel type="button" onClick={onClose}>
            Cancel
          </BtnCancel>
          <BtnSave type="submit">Save</BtnSave>
        </Footer>
      </Form>
    </Backdrop>,
    modalRoot
  );
};
