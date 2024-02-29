import { useState } from 'react';
import { BtnText, Calendar, DateField, SvgIcon } from './DatePicker.styled';
import { dateISO, dateLocal } from "../../shared/utils/dates";
import { useRef } from 'react';

export const DatePicker = ({ name, minDate, maxDate, handleChange }) => {
  const [field, setField] = useState("Select date");
  const fieldRef = useRef(null);

  const handleClick = () => {
    fieldRef.current.showPicker();
  };

  return (
      <DateField>
        <Calendar ref={fieldRef} type="date" name={name}
          min={dateISO(minDate)}
          max={dateISO(maxDate)}
          onChange={(e) => {
            handleChange(e.target.value);
            setField(dateLocal(e.target.value));
          }}
      />
      <BtnText type='button' onClick={handleClick} >{ field}<SvgIcon tag={"calendar"}/></BtnText>
      </DateField>
  );
};
