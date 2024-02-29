import { TripCard } from "../TripCard/TripCard";
import { List } from "./TripList.styled";

export const TripList = ({ trips, handleClick, handleDelete }) => {
  return (
    <List>
      {trips.map((el) => (
        <TripCard key={el.id} trip={el} onClick={handleClick} onDelete={handleDelete} />
      ))}
    </List>
  );
};