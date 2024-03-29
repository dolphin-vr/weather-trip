import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { SearchTrip } from "../../components/SearchTrip/SearchTrip";
import { Modal } from "../../components/Modal/Modal";
import { Aside, Layout, Main } from "./MainPage.styled";
import { Today } from "../../components/Today/Today";
import { Timer } from "../../components/Timer/Timer";
import { WeeklyWeather } from "../../components/WeeklyWeather/WeeklyWeather";
import { TripGallery } from "../../components/TripGallery/TripGallery";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { UserBtn } from "../../components/UserBtn/UserBtn";
// import { dateCompare, } from "../../shared/utils/dates";

const getSavedTrips = () => {
  const savedTrips = localStorage.getItem("trips");
  if (savedTrips !== null) {
    return JSON.parse(savedTrips);
  }
  return [];
};

export const MainPage = ({ user, onSignOut }) => {
  const [trips, setTrips] = useState(getSavedTrips);
  const [activeTrip, setActiveTrip] = useState({});
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);


  const filteredTrips = trips.length > 0 && filter ? trips.filter(el => el.city.toLowerCase().startsWith(filter.toLowerCase())) : [...trips];
  
  const handleFilter = filter => {
    setFilter(filter);
  };
  const handleSort = () => {
    setTrips(prevTrips =>
      [...prevTrips.sort(
        (a, b) => {
          const d1 = new Date(a.startDate);
          const d2 = new Date(b.startDate);
          return d1 - d2;
        }
      )]
    );
  };
  const toggleModal = () => setShowModal(!showModal);
  const addTrip = trip => setTrips(prevTrips => [...prevTrips, { id: nanoid(), ...trip }]);
  const deleteTrip = (e, id) => {
    e.stopPropagation();
    setTrips(prevTrips => prevTrips.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const handleTripSelection = async trip => {
    setActiveTrip(trip);
  };

  return (
    <Layout>
      <Main>
        <PageTitle />
        <SearchTrip filter={filter} onChangeFilter={handleFilter} onSort={handleSort} />
        <TripGallery trips={filteredTrips} handleAdd={toggleModal} handleDelete={deleteTrip} handleSelect={handleTripSelection} />
        <WeeklyWeather city={activeTrip.city} startDate={activeTrip.startDate} endDate={activeTrip.endDate} />
      </Main>
      <Aside>
        <Today city={activeTrip.city} />
        <Timer startDate={activeTrip.startDate} />
        <UserBtn user={user} onSignOut={onSignOut} />
      </Aside>
      {showModal && <Modal onSave={addTrip} onClose={toggleModal} />}
    </Layout>
  );
};
