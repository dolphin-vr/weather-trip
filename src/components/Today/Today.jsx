import { useEffect, useRef, useState } from "react";
import { weekDay } from "../../shared/utils/dates";
import { City, SvgIcon, Temperature, Unit, WeekDay, Wrapper } from "./Today.styled";
import { serviceGetTodayWeather } from "../../shared/weaterApi";

export const Today = ({ city }) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [today, setToday] = useState({}); //temp: "", city: ""

  const controllerRef = useRef();
  useEffect(() => {
    if (!city) return;
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    async function getTodayWeather() {
      try {
        setLoader(true);
        setError(false);
        const responce = await serviceGetTodayWeather(city, controllerRef.current.signal);
        setToday(responce.days[0]);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    }
    getTodayWeather();

    return () => {
      controllerRef.current.abort();
    };
  }, [city]);

  const showWeather =!loader&& Object.keys(today).length > 0;
  return (
    <>
      {loader && <span>Loading</span>}
      <Wrapper>
        <WeekDay>{weekDay()}</WeekDay>
        {showWeather && (
          <>
            <Temperature>
              <SvgIcon tag={today.icon} />
              {Math.round(today.temp)}
              <Unit>°C</Unit>
            </Temperature>
            <City>{city}</City>
          </>
        )}
        {error && <span>Error. Try again {error}</span>}
      </Wrapper>
    </>
  );
};
