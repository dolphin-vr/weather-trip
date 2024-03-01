import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { SearchTrip } from "../components/SearchTrip/SearchTrip";
import { Modal } from "../components/Modal/Modal";
import { Aside, Bold, Layout, Main, Title } from "./MainPage.styled";
import { Today } from "../components/Today/Today";
import { Timer } from "../components/Timer/Timer";
import { WeeklyWeather } from "../components/WeeklyWeather/WeeklyWeather";
// import { TripList } from "../components/TripList/TripList";
import { TripGallery } from "../components/TripGallery/TripGallery";

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

	const handleFilter = filter => { setFilter(filter) };
  const toggleModal = () => setShowModal(!showModal);
  const addTrip = (trip) => setTrips((prevTrips) => [...prevTrips, { id: nanoid(), ...trip }]);
  const deleteTrip = (e, id) => { e.stopPropagation(); setTrips((prevTrips) => prevTrips.filter(el => el.id !== id))};

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

	const handleTripSelection = async(trip) => {
    // add loader and error-handler
    setActiveTrip(trip);
	}

  console.log("trips len= ", trips.length);
  console.log("filter= ", Boolean(filter));
	const filteredTrips =trips.length>0 && filter ? trips.filter((el) => el.city.toLowerCase().startsWith(filter.toLowerCase())) :[...trips];
  console.log("filt-trips= ", filteredTrips);

	return (
    <Layout>
      <Main>
        <Title>
          Weather <Bold>Forecast</Bold>
        </Title>
        <SearchTrip filter={filter} onChangeFilter={handleFilter} />
        {/* <TripList trips={filteredTrips} handleAdd={toggleModal} handleDelete={deleteTrip} handleSelect={handleTripSelection} /> */}
        <TripGallery trips={filteredTrips} handleAdd={toggleModal} handleDelete={deleteTrip} handleSelect={handleTripSelection} />
        <WeeklyWeather city={activeTrip.city} startDate={activeTrip.startDate} endDate={activeTrip.endDate} />
      </Main>
      <Aside>
        <Today city={activeTrip.city} />
        <Timer startDate={activeTrip.startDate} />
      </Aside>
      {showModal && <Modal onSave={addTrip} onClose={toggleModal} />}
    </Layout>
  );
}