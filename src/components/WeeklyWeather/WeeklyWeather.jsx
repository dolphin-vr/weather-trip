import { useEffect, useRef, useState } from "react";
import { Day,  Item, List, SvgIcon, Temper, Title, Weekly } from "./WeeklyWeather.styled"
import { serviceGetRangeWeather } from "../../shared/weaterApi";
import { weekDay } from "../../shared/utils/dates";

export const WeeklyWeather = ({city, startDate, endDate}) => {
  const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [days, setDays] = useState([]);

  const controllerRef = useRef();
  useEffect(() => {
    if (!city) return;
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    async function getRangeWeather() {
      try {
        setLoader(true);
        setError(false);
				const responce = await serviceGetRangeWeather(city, startDate, endDate, controllerRef.current.signal);
				setDays(responce.days);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          // console.log('err-code= ', error.code)
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    }
    getRangeWeather();

    return () => {
      controllerRef.current.abort();
    };
	}, [city, endDate, startDate]);
	
	const showWeather = !loader && days.length > 0;

	return (
    <Weekly>
      <Title>Week</Title>
      {loader && <span>Loading</span>}
      {showWeather && (
        <List>
          {days.map((el) => (
            <Item key={el.datetimeEpoch}>
              <Day>{weekDay(el.datetime)}</Day>
							{/* <Icon src={`${sprite}#${el.icon}`} alt={el.conditions} /> */}
							<SvgIcon tag={el.icon}/>
							<Temper>{Math.round(el.tempmax) }° / {Math.round(el.tempmin) }°</Temper>
            </Item>
          ))}
        </List>
      )}
      {error && <span>Error. Try again {error}</span>}
    </Weekly>
  );
}