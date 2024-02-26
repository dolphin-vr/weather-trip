import { useState, useEffect } from "react";
import { SearchTrip } from "../components/SearchTrip/SearchTrip"
import { TripList } from "../components/TripList/TripList"
import { nanoid } from "nanoid";
import { Modal } from "../components/Modal/Modal";

const getSavedTrips = () => {
  const savedTrips = localStorage.getItem("trips");
  if (savedTrips !== null) {
    return JSON.parse(savedTrips);
  }
  return [];
};

export const Main = () => {
	const [trips, setTrips] = useState(getSavedTrips);
	const [filter, setFilter] = useState("");
	const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

	const handleFilter = filter => { setFilter(filter) };

	const addTrip = trip => {
		setTrips(prevTrips=>([...prevTrips, {id: nanoid(), ...trip}]))
	}

	const filteredTrips = trips.filter((el) => el.city.toLowerCase().startsWith(filter.toLowerCase()));

  const toggleModal = () => setShowModal(!showModal);

	return (
		<>
			<h1>Weather <span>Forecast</span></h1>
			<SearchTrip filter={filter} onChangeFilter={handleFilter}  />
			<TripList trips={filteredTrips} />
			<button type="button" onClick={toggleModal}>Add trip</button>
			{showModal && <Modal onSave={addTrip} onClose={toggleModal} />}
		</>
	)
}