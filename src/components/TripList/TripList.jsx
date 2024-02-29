import { TripCard } from "../TripCard/TripCard";
import { BtnAdd, Item, List, SvgIcon } from "./TripList.styled";

export const TripList = ({ trips, handleClick, handleAdd, handleDelete }) => {
  return (
    <List>
      {trips.map((el) => (
        <Item key={el.id}>
          <TripCard trip={el} onClick={handleClick} onDelete={handleDelete} />
        </Item>
      ))}
      <Item>
        <BtnAdd type="button" onClick={handleAdd}><SvgIcon tag={"add"} />Add trip</BtnAdd>
      </Item>
    </List>
  );
};