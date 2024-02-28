import { City, Item, Period, Photo } from "./TripCard.styled";

const IMG_PATH = import.meta.env.VITE_IMAGES_URL;
export const TripCard = ({ trip, onClick }) => {
  const imgUrl = (str) => {
    return `${IMG_PATH}assets/images/${str}/01.jpg`;
  };
  return (
    <Item onClick={()=>onClick(trip)}>
      <Photo src={imgUrl(trip.city)} alt={trip.city} />
      <City>{trip.city}</City>
      <Period>
        {trip.startDate} - {trip.endDate}
      </Period>
    </Item>
  );
};
