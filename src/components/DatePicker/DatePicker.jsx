import { useState } from 'react';
import { Calendar, DateField, Field, Label } from './DatePicker.styled';
import { dateISO, dateLocal } from "../../shared/utils/dates";

export const DatePicker = ({ label, name, minDate, maxDate, handleChange }) => {
  const [field, setField] = useState();

  return (
      <DateField>
        <Label>{label}</Label>
        <Field type="text" name={name + "Value"} placeholder="Select date" value={dateLocal(field)} readOnly />
        <Calendar type="date" name={name}
          min={dateISO(minDate)}
          max={dateISO(maxDate)}
          onChange={(e) => {
            handleChange(e.target.value);
            setField(e.target.value);
          }}
        />
      </DateField>
  );
};
