import axios from "axios";
import { dateISO } from "./utils/dates";

const requester = axios.create({
  baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  headers: { "content-type": "application/json" },
	params: {
		unitGroup: "metric",
		include: "day",
		contentType: "json",
    key: import.meta.env.VITE_WEATHERAPI_KEY,
  },
});

const getToday = async (city) => {
	const { data } = await requester.get(`${city.replaceAll(" ", "-")}/today`);
	return data
}

export const serviceGetTodayWeather = async (city, sig) => {
	requester.signal = sig;
  const { data } = await requester.get(`${city.replaceAll(" ", "-")}/today`);
  return data;
};

const getRange = async (city, startDate, endDate) => {
  const { data } = await requester.get(`${city.replaceAll(" ", "-")}/${dateISO(startDate)}/${dateISO(endDate)}`);
  return data;
};

export const serviceGetRangeWeather = async (city, startDate, endDate, sig) => {
  requester.signal = sig;
  const { data } = await requester.get(`${city.replaceAll(" ", "-")}/${dateISO(startDate)}/${dateISO(endDate)}`);
  return data;
};

export default { getToday, getRange };