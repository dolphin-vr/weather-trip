import { City, Item, Period, Photo } from "./TripCard.styled";

const IMG_PATH = import.meta.env.VITE_PUBLIC_URL;
export const TripCard = ({ trip }) => {
  const imgUrl = (str) => {
    return `${IMG_PATH}/${str}/01.jpg`
  }
	return (
    <Item>
      <Photo src={imgUrl(trip.city)} alt={trip.city} />
      <City>{trip.city}</City>
      <Period>{trip.startDate} - {trip.endDate}</Period>
    </Item>
  );
}