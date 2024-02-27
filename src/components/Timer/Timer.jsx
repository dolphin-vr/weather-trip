import { useState } from "react";
import { dateISO } from "../../shared/utils/dates";
import { Item, List, Number, Unit } from "./Timer.styled"
import { useEffect } from "react";

export const Timer = ({ startDate }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0)

	// const counter = startDate => {
	// 	const endTime = Date.parse(dateISO(startDate));
	// 	const currentTime = Date.now();
	// 	const delta = endTime - currentTime;
	// 	setDays(Math.trunc(delta / 86400000));
	// 	setHours(Math.trunc((delta - days * 86400000) / 3600000));
	// 	setMinutes(Math.trunc((delta - days * 86400000 - hours * 3600000) / 60000));
	// 	setSeconds(Math.trunc((delta - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000));
	// }
	useEffect(() => {
		console.log('timer date= ', startDate)
		if (!startDate) return;
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

		return ()=>{clearInterval(idCounter)}
	}, [days, hours, minutes, startDate])
	
  return (
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
  );
};