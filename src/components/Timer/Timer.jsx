import { useState } from "react";
import { dateISO, todayDate } from "../../shared/utils/dates";
import { Expired, Item, List, Number, Unit } from "./Timer.styled";
import { useEffect } from "react";

export const Timer = ({ startDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (!startDate) return;
    if (new Date(startDate).getTime() - todayDate().getTime() < 1000) {
      setShowTimer(false);
      return;
    }
    setShowTimer(true);
    const idCounter = setInterval(() => {
      const endTime = Date.parse(dateISO(startDate));
      const currentTime = Date.now();
      const delta = endTime - currentTime;
      const days = Math.trunc(delta / 86400000);
      const hours = Math.trunc((delta - days * 86400000) / 3600000);
      const minutes = Math.trunc((delta - days * 86400000 - hours * 3600000) / 60000);
      const seconds = Math.trunc((delta - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(idCounter);
    };
  }, [days, hours, minutes, startDate]);

  return showTimer ? (
    <List>
      <Item>
        <Number>{days}</Number>
        <Unit>days</Unit>
      </Item>
      <Item>
        <Number>{hours}</Number>
        <Unit>hours</Unit>
      </Item>
      <Item>
        <Number>{minutes}</Number>
        <Unit>minutes</Unit>
      </Item>
      <Item>
        <Number>{seconds}</Number>
        <Unit>seconds</Unit>
      </Item>
    </List>
  ) : (
    <Expired>Your trip is expired</Expired>
  );
};
