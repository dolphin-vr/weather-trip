import { useState } from "react";
import { createPortal } from "react-dom";
import { dateLocal, maxDate, todayDate } from "../../shared/utils/dates";
import { Selector } from "../Selector/Selector";
import { DatePicker } from "../DatePicker/DatePicker";
import { Backdrop, BtnClose, Form } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onSave, onClose }) => {
  const today = todayDate();
  const lastDate = maxDate(todayDate(), 15);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(lastDate);
  const [city, setCity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
		onSave({ city, startDate, endDate });
		onClose();
  };

  return createPortal(
    <Backdrop>
      <Form onSubmit={handleSubmit}>
        <BtnClose type="button" >X</BtnClose>
        <h1>Create trip</h1>
        <Selector handleSelector={setCity} />
        <DatePicker label={"Start date:"} name={"start"} minDate={today} maxDate={endDate} handleChange={setStartDate} />
        <DatePicker label={"End date:"} name={"end"} minDate={startDate} maxDate={lastDate} handleChange={setEndDate} />
        <button type="submit">Save</button>
        <p>{city}</p>
        <p>{dateLocal(startDate)}</p>
        <p>{dateLocal(endDate)}</p>
      </Form>
    </Backdrop>,
    modalRoot
  );
};