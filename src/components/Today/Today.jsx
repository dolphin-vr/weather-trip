import { useEffect, useRef, useState } from "react";
import { weekDay } from "../../shared/utils/dates";
import { City, Temperature, WeekDay, Wrapper } from "./Today.styled";
import { serviceGetTodayWeather } from "../../shared/weaterApi";

export const Today = ({ city }) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [today, setToday] = useState({ temp: "", city: "" });

  const controllerRef = useRef();
	useEffect(() => {
		console.log('citi= ', city)
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
        setToday({ temp: responce.days[0].temp, city });
      } catch (error) {
				if (error.code !== "ERR_CANCELED") {
					console.log('err-code= ', error.code)
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
console.log(error)
  return (
    <Wrapper>
      <WeekDay>{weekDay()}</WeekDay>
      {loader ? (
        <span>Loading</span>
      ) : (
        <>
          <Temperature>{today.temp || ""}</Temperature>
          <City>{today.city || ""}</City>
        </>
			)}
			{error && <span>Error. Try again { error }</span>}
    </Wrapper>
  );
};
