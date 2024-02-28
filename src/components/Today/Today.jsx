import { useEffect, useRef, useState } from "react";
import { weekDay } from "../../shared/utils/dates";
import { City, SvgIcon, Temperature, WeekDay, Wrapper } from "./Today.styled";
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
        setToday(responce.days[0]); // { temp: responce.days[0].temp, city }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          // console.log('err-code= ', error.code)
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
            <SvgIcon tag={today.icon} />
            <Temperature>{today.temp || ""}℃</Temperature>
            <City>{today.city || ""}</City>
          </>
        )}
        {error && <span>Error. Try again {error}</span>}
      </Wrapper>
    </>
  );
};
