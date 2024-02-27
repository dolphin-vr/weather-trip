import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import serviceWeather from "../shared/weaterApi";
import { SearchTrip } from "../components/SearchTrip/SearchTrip";
import { TripList } from "../components/TripList/TripList";
import { Modal } from "../components/Modal/Modal";
import { Aside, Bold, Layout, Main, Title } from "./MainPage.styled";
import { Today } from "../components/Today/Today";
import { Timer } from "../components/Timer/Timer";

const getSavedTrips = () => {
  const savedTrips = localStorage.getItem("trips");
  if (savedTrips !== null) {
    return JSON.parse(savedTrips);
  }
  return [];
};

export const MainPage = () => {
  const [trips, setTrips] = useState(getSavedTrips);
  const [activeTrip, setActiveTrip] = useState({})
	const [filter, setFilter] = useState("");
	const [showModal, setShowModal] = useState(false);
	// const [weatherToday, setWeatherToday] = useState({});
	// const [weatherRange, setWeatherRange] = useState({});

	const handleFilter = filter => { setFilter(filter) };
  const toggleModal = () => setShowModal(!showModal);
	const addTrip = (trip) => setTrips((prevTrips) => [...prevTrips, { id: nanoid(), ...trip }]);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

	const handleTripSelection = async(trip) => {
    // add loader and error-handler
    setActiveTrip(trip);
		// const today = await serviceWeather.getToday(trip.city);
		// setWeatherToday(today.days[0]);
    // console.log("weather today= ", today);
		const range = await serviceWeather.getRange(trip.city, trip.startDate, trip.endDate);
		// setWeatherRange(range)
		console.log("weather range= ", range);
	}

	const filteredTrips = trips.filter((el) => el.city.toLowerCase().startsWith(filter.toLowerCase()));

	return (
    <Layout>
      <Main>
        <Title>Weather<Bold>Forecast</Bold></Title>
        <SearchTrip filter={filter} onChangeFilter={handleFilter} />
        <TripList trips={filteredTrips} handleClick={handleTripSelection} />
        <button type="button" onClick={toggleModal}>Add trip</button>
      </Main>
      <Aside>
        <Today city={activeTrip.city} />
        <Timer startDate={activeTrip.startDate} />
      </Aside>
      {showModal && <Modal onSave={addTrip} onClose={toggleModal} />}
    </Layout>
  );
}